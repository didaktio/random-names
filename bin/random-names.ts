#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RandomNamesStack } from '../lib/random_names-stack';

const app = new cdk.App();
new RandomNamesStack(app, 'RandomNamesStack');
