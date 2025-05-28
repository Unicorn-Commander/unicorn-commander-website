#!/bin/bash

# Deploy script for Magic Unicorn Tech website
# Usage: ./deploy.sh [--clean]

set -e  # Exit on any error

echo "🦄 Deploying Magic Unicorn Tech website..."

# Parse arguments
CLEAN_BUILD=false
if [[ "$1" == "--clean" ]]; then
    CLEAN_BUILD=true
    echo "🧹 Clean build requested"
fi

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
    echo "🌐 Website is now available at: http://localhost:7878"
    echo "📊 Container status:"
    docker compose ps
else
    echo "❌ Deployment failed!"
    echo "📋 Container logs:"
    docker compose logs
    exit 1
fi

echo "🎉 Deploy complete!"