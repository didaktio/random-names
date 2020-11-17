import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as RandomNames from '../lib/random_names-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new RandomNames.RandomNamesStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
