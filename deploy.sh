#!/bin/bash
set -eo pipefail
echo 'Compiling ts files inside src...'
tsc
echo 'Deploying to AWS...'
cdk deploy