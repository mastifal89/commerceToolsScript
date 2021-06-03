import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'
import {
  createApiBuilderFromCtpClient,
  ApiRoot,
} from '@commercetools/platform-sdk'
import fetch from 'node-fetch'

const projectKey = 'holasoycara89'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.us-central1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'Bqis0Wx8dmSzz5w7BxLpUUIK',
    clientSecret: 'woeVKxxnBYoscqH5EHJDk_EaXWMiTuf3',
  },
  fetch,
})

const httpMiddleware = createHttpMiddleware({
  host: 'https://api.us-central1.gcp.commercetools.com',
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const apiRoot = createApiBuilderFromCtpClient(ctpClient)

apiRoot
  .withProjectKey({ projectKey })
  .products()
  .post({
    body: {
      name: { en: 'Fender Stratocaster' },
      productType: {
        id: '7d879868-eb27-45c7-9eef-22c8501273b5',
      },
      slug: { en: 'Strato' },
    },
  })
  .execute()
  .then((x) => {
    console.log(x)
  })
  .catch(err => console.log(err))