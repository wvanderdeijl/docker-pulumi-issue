import * as docker from "@pulumi/docker";
import { interpolate, output } from "@pulumi/pulumi";
import * as random from '@pulumi/random';

const apiKey = new random.RandomUuid('guid', {}).result

new docker.Image(
    'image',
    {
        imageName: 'eu.gcr.io/my-project/foo:v1.0.0',
        build: {
            dockerfile: interpolate`./foo.Dockerfile`,
            platform: 'linux/arm64',
            args: {
                KEY: apiKey,
            },
        },
        skipPush: true,
    },
);
