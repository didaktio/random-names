import * as cdk from '@aws-cdk/core';
import { RandomNameService } from './random-names-service';

export class RandomNamesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new RandomNameService(this, 'Random Names');
  }
}
