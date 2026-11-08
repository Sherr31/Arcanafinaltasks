#!/bin/bash

echo "Running Lint..."

if grep -q "TODO" app/main.sh
then
    echo "Lint Failed!"
    exit 1
fi

echo "Lint Passed!"
