#!/bin/bash

# Car Racing SPA Deployment Script
# This script builds and deploys the Car Racing SPA application

# Stop on errors
set -e

echo "🚀 Starting deployment process..."

# Create a build directory if it doesn't exist
mkdir -p dist

# 1. Build the client-side application with Vite
echo "📦 Building the client application..."
npm run build:client

# 2. Create a simple server to serve the static files
echo "🔧 Setting up static file server..."
cat > dist/server.js << EOF
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the client directory
app.use(express.static(join(__dirname, 'client')));

// For any other route, serve the index.html (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`Car Racing SPA server running on port \${PORT}\`);
});
EOF

# 3. Create a package.json file for production
echo "📝 Creating production package.json..."
cat > dist/package.json << EOF
{
  "name": "car-racing-spa",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.21.2"
  }
}
EOF

# 4. Install production dependencies
echo "📚 Installing production dependencies..."
cd dist
npm install --production
cd ..

# 5. Display deployment instructions
echo ""
echo "✅ Deployment build complete!"
echo ""
echo "To run the application locally:"
echo "  cd dist"
echo "  npm start"
echo ""
echo "To deploy to a hosting service:"
echo "  1. Upload the entire 'dist' directory to your hosting service"
echo "  2. Make sure to set up the hosting service to run 'npm start'"
echo ""
echo "Note: This build uses the mock data implementation for the API."
echo "      No backend server is required to run this application."