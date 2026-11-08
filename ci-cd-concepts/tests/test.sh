#!/bin/bash

echo "Running Tests..."

output=$(bash app/main.sh)

if [[ "$output" == "Hello from CI/CD Demo" ]]
then
    echo "Tests Passed!"
else
    echo "Tests Failed!"
    exit 1
fi
