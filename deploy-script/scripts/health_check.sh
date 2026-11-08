#!/bin/bash


echo "Checking application health..."


if pgrep -f app.sh > /dev/null
then
    echo "Application is healthy"
    exit 0
else
    echo "Application failed"
    exit 1
fi
