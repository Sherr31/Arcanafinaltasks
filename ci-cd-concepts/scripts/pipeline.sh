#!/bin/bash

set -e

echo "========== CI/CD Pipeline =========="

./scripts/lint.sh

./tests/test.sh

./scripts/build.sh

./scripts/package.sh

echo "Pipeline Completed Successfully!"
