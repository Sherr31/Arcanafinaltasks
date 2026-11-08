#!/bin/bash


set -e


APP_DIR="./app"
BACKUP_DIR="./backup"


echo "Starting deployment..."


echo "Creating backup..."

rm -rf $BACKUP_DIR

cp -r $APP_DIR $BACKUP_DIR


echo "Pulling latest code..."

git pull


echo "Installing dependencies..."

./scripts/install_dependencies.sh


echo "Restarting service..."

./scripts/restart_service.sh


echo "Running health check..."

if ./scripts/health_check.sh; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"

    echo "Rolling back..."

    rm -rf "$APP_DIR"

    cp -r "$BACKUP_DIR" "$APP_DIR"

    echo "Rollback completed"

    exit 1
fi
