# Random Names

A simple service for getting a list of random names in JSON form. By default, ten names are returned; this can be changed by passing the `limit` parameter.

##### URL: https://n6wtrt41eh.execute-api.us-west-2.amazonaws.com/prod
Short: https://names.jaipreston.com
### Tech
* Typescript
* AWS:
    * Lambda
    * API Gateway API to call the Lambda.
    * S3 bucket containing the Lambda.
* [Chance](https://chancejs.com/)

### Prerequisites
* [Amazon CDK installed on your machine](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
* [AWS Credentials](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) set either globally (by running `aws configure`) or as environment variables.
### Getting Started
1. Clone or download the repo into a fresh folder on your machine.
2. Run `npm install` from the project root to install dependencies.

### Deploying
The lambda function resides in `src/random-names.ts`. To deploy, run the deploy script (`deploy.sh`). This will compile the typescript inside the src directory to javascript, before performing a CDK deployment.

### Troubleshooting
* "Command not found" and/or "Permission denied" when running deploy script &mdash; You may have to run `chmod +x deploy.sh` to add execute permission.