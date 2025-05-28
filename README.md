# Magic Unicorn Tech Website

## Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### Deploy with Single Command
```bash
# Make deploy script executable
chmod +x scripts/deploy.sh

# Run deployment
./scripts/deploy.sh
```

Or manually with Docker Compose:
```bash
docker-compose up --build -d
```

The site will be available at http://localhost:3000

### Stop the Application
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

## Development

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
