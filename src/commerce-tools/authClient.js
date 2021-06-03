import fetch from 'node-fetch';
import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue';
import { createRequestBuilder } from '@commercetools/api-request-builder';

import {
  createApiBuilderFromCtpClient,
  ApiRoot,
} from '@commercetools/platform-sdk'

export default ({
  clientId, clientSecret, projectKey, host, oauthHost, concurrency = 10,
}) => {
  const commercetools = {};

  commercetools.client = createClient({
    middlewares: [
      createAuthMiddlewareForClientCredentialsFlow({
        host: oauthHost,
        projectKey,
        credentials: {
          clientId,
          clientSecret,
        },
        fetch,
      }),
      createQueueMiddleware({ concurrency }),
      createHttpMiddleware({ host, fetch }),
    ],
  });

  commercetools.getRequestBuilder = () => createApiBuilderFromCtpClient({ projectKey });

  return commercetools;
};
