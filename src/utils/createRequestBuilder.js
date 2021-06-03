import {
    createRequestBuilder,
    features,
  } from '@commercetools/api-request-builder';



  const options = {
    projectKey: 'holasoycara89',
    customServices: {
      users: {
        type: 'users',
        endpoint: '/users',
        features: [features.query, features.queryOne],
      },
    },
  }

  export const requestBuilder = createRequestBuilder(options)