#!/bin/bash


echo "Restarting application service..."

pkill -f app.sh || true

./app/app.sh &


echo "Service restarted"
