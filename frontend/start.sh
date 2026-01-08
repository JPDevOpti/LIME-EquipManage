#!/bin/bash
# Start script for EquipManage Frontend on Render

set -e

echo "Starting EquipManage Frontend..."
echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"

# Start the application
exec npm start
