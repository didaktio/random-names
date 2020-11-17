#!/bin/bash
set -eo pipefail
echo 'Compiling ts files inside src folder...'
tsc
echo 'Deploying to AWS...'
cdk deploy