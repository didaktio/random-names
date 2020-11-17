import * as core from "@aws-cdk/core";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
import * as s3 from "@aws-cdk/aws-s3";

export class RandomNameService extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const bucket = new s3.Bucket(this, "RandomNameStore");

        const handler = new lambda.Function(this, "NameHandler", {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset("src"),
            handler: "random-names.handler",
            environment: {
                BUCKET: bucket.bucketName
            }
        });

        bucket.grantReadWrite(handler);

        const api = new apigateway.RestApi(this, "random-names-api", {
            restApiName: "Random Names Service",
            description: "Serves ten random names."
        });

        const getWidgetsIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });

        api.root.addMethod("GET", getWidgetsIntegration);
    }
}