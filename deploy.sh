#!/bin/bash

# UC-1 Website - Docker Deployment Script  
# Enhanced deployment with clear dev/prod modes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}[UC-1]${NC} $1"
}

# Function to check if port is available
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 1
    else
        return 0
    fi
}

# Function to validate port number
validate_port() {
    local port=$1
    if [[ $port =~ ^[0-9]+$ ]] && [ $port -ge 1024 ] && [ $port -le 65535 ]; then
        return 0
    else
        return 1
    fi
}

# Function to stop existing container
stop_existing_container() {
    print_status "Stopping any existing UC-1 containers..."
    docker stop unicorn-commander-uc1-container 2>/dev/null || true
    docker rm unicorn-commander-uc1-container 2>/dev/null || true
    docker compose down 2>/dev/null || true
    print_success "Cleanup completed"
}

# Function to cleanup Docker resources
cleanup_docker() {
    print_status "Cleaning up unused Docker resources..."
    docker system prune -f >/dev/null 2>&1 || true
}

# Main deployment function
deploy_application() {
    local port=$1
    local deploy_type=$2
    
    if [ "$deploy_type" = "2" ]; then
        print_header "Starting PRODUCTION deployment on port $port..."
        
        # Create .env file for production
        echo "HOST_PORT=$port" > .env
        
        # Build and start the container using production Dockerfile
        print_status "Building optimized production Docker image..."
        docker build -f Dockerfile.prod -t unicorn-commander-uc1-prod .
        
        print_status "Starting UC-1 application (Production)..."
        if docker run -d --name unicorn-commander-uc1-container -p 0.0.0.0:$port:80 --restart unless-stopped unicorn-commander-uc1-prod; then
            print_success "Production container started successfully"
        else
            print_error "Failed to start production container"
            exit 1
        fi
    else
        print_header "Starting DEVELOPMENT deployment on port $port..."
        
        # Create .env file for docker-compose
        echo "HOST_PORT=$port" > .env
        
        # Build and start the container
        print_status "Building Docker image..."
        docker compose build
        
        print_status "Starting UC-1 application..."
        if docker compose up -d; then
            print_success "Container started successfully"
        else
            print_error "Failed to start container"
            print_status "Container logs:"
            docker compose logs --tail=20
            exit 1
        fi
    fi
    
    # Wait a moment for the container to start
    sleep 5
    
    # Check if container is running
    if docker ps -q -f name=unicorn-commander-uc1-container | grep -q .; then
        print_success "UC-1 Website is now running!"
        echo ""
        echo "🦄 =================================="
        echo "🦄  UNICORN COMMANDER UC-1"
        echo "🦄 =================================="
        echo ""
        echo "✨ Application URL: http://localhost:$port"
        echo "✨ External Access: http://0.0.0.0:$port (accessible from any host)"
        echo "✨ Container Name: unicorn-commander-uc1-container"
        if [ "$deploy_type" = "2" ]; then
            echo "✨ Mode: Production (Optimized)"
            echo "✨ Features: Gzip compression, static caching, security headers"
        else
            echo "✨ Mode: Development (Hot Reload)"
            echo "✨ Features: Live reload, debugging tools, source maps"
        fi
        echo "✨ Status: Running"
        echo ""
        echo "📋 Management Commands:"
        if [ "$deploy_type" = "2" ]; then
            echo "   Stop:    docker stop unicorn-commander-uc1-container"
            echo "   Logs:    docker logs unicorn-commander-uc1-container"
            echo "   Remove:  docker rm unicorn-commander-uc1-container"
        else
            echo "   Stop:    docker compose down"
            echo "   Logs:    docker compose logs -f"
            echo "   Restart: docker compose restart"
        fi
        echo ""
        echo "🔧 To deploy on a different port, run this script again"
        echo ""
        print_header "Ready for action! 🦄✨"
    else
        print_error "Failed to start the container. Check logs."
        exit 1
    fi
}

# Main script execution
main() {
    echo ""
    echo -e "${CYAN}╔══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║${NC}                  ${PURPLE}🦄 UNICORN COMMANDER UC-1${NC}                    ${CYAN}║${NC}"
    echo -e "${CYAN}║${NC}                    ${BLUE}Enhanced Deploy Script${NC}                     ${CYAN}║${NC}"
    echo -e "${CYAN}╚══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # Check if Docker is installed and running
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! docker info &> /dev/null; then
        print_error "Docker is not running. Please start Docker first."
        exit 1
    fi
    
    # Check if docker compose is available (v2)
    if ! docker compose version &> /dev/null; then
        print_error "Docker Compose v2 is not available. Please install Docker Compose v2 or update Docker Desktop."
        exit 1
    fi
    
    # Stop any existing container
    stop_existing_container
    
    # Get deployment type
    echo ""
    print_header "Choose how you want to run UC-1:"
    echo ""
    echo -e "  ${GREEN}1) Development Mode${NC} - Live code changes (hot reload)"
    echo "     • Files update instantly as you edit them"
    echo "     • Debugging tools and detailed error messages"
    echo "     • Perfect for: coding, testing, making changes"
    echo ""
    echo -e "  ${GREEN}2) Production Mode${NC} - Optimized for speed and performance"
    echo "     • Compressed files and fast loading"
    echo "     • Gzip compression and security headers"
    echo "     • Perfect for: demos, sharing, final deployment"
    echo ""
    read -p "Enter choice (1 or 2, default: 1): " deploy_type
    
    if [ -z "$deploy_type" ]; then
        deploy_type=1
    fi

    # Get port from user
    while true; do
        echo ""
        if [ "$deploy_type" = "2" ]; then
            print_header "Choose a port for Production Mode:"
            echo "  • Port range: 1024-65535"
            echo "  • Default: 80 (standard web port - http://localhost)"
            echo "  • Alternatives: 8080, 3000, 5000"
            echo ""
            read -p "Enter port number (or press Enter for 80): " user_port
            if [ -z "$user_port" ]; then
                user_port=80
            fi
        else
            print_header "Choose a port for Development Mode:"
            echo "  • Port range: 1024-65535"
            echo "  • Default: 6464 (UC-1 standard - http://localhost:6464)"
            echo "  • Alternatives: 3000, 5173, 8080"
            echo ""
            read -p "Enter port number (or press Enter for 6464): " user_port
            if [ -z "$user_port" ]; then
                user_port=6464
            fi
        fi
        
        # Validate port number
        if ! validate_port "$user_port"; then
            print_error "Invalid port number. Please enter a number between 1024 and 65535."
            continue
        fi
        
        # Check if port is available
        if ! check_port "$user_port"; then
            print_warning "Port $user_port is already in use."
            read -p "Would you like to choose a different port? (y/n): " choice
            if [[ $choice =~ ^[Yy]$ ]]; then
                continue
            else
                print_status "Proceeding with port $user_port (existing service will be displaced)"
                break
            fi
        else
            print_success "Port $user_port is available!"
            break
        fi
    done
    
    # Confirm deployment
    echo ""
    print_header "Deployment Summary:"
    echo "  • Application: UC-1 Website"
    echo "  • Port: $user_port"
    echo "  • Local URL: http://localhost:$user_port"
    echo "  • External URL: http://0.0.0.0:$user_port (accessible from any host)"
    if [ "$deploy_type" = "2" ]; then
        echo "  • Mode: Production (Optimized)"
    else
        echo "  • Mode: Development (Hot Reload)"
    fi
    echo "  • Container: unicorn-commander-uc1-container"
    echo ""
    read -p "Proceed with deployment? (y/n): " confirm
    
    if [[ $confirm =~ ^[Yy]$ ]]; then
        deploy_application "$user_port" "$deploy_type"
        cleanup_docker
    else
        print_status "Deployment cancelled."
        exit 0
    fi
}

# Run main function
main "$@"