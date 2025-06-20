#!/bin/bash

# Deploy script for Unicorn Commander website
# Usage: ./deploy.sh [--clean] [--port PORT]

set -e  # Exit on any error

echo "🦄 Deploying Unicorn Commander website..."

# Default values
CLEAN_BUILD=false
PORT=7878

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --clean)
            CLEAN_BUILD=true
            echo "🧹 Clean build requested"
            shift
            ;;
        --port)
            PORT="$2"
            echo "🔌 Using port: $PORT"
            shift 2
            ;;
        *)
            echo "Unknown option $1"
            echo "Usage: ./deploy.sh [--clean] [--port PORT]"
            exit 1
            ;;
    esac
done

# Export port for docker-compose
export WEB_PORT=$PORT

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose down

# Clean up if requested
if [ "$CLEAN_BUILD" = true ]; then
    echo "🗑️  Removing old images..."
    docker system prune -f
    docker image prune -f
fi

# Build and start containers
echo "🔨 Building and starting containers..."
docker compose up --build -d

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 5

# Check if container is running
if docker compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "🌐 Website is now available at: http://localhost:$PORT"
    echo "📊 Container status:"
    docker compose ps
else
    echo "❌ Deployment failed!"
    echo "📋 Container logs:"
    docker compose logs
    exit 1
fi

echo "🎉 Deploy complete!"