import Commercetools from '../commerce-tools';
import Config from '../config';
import Logger from '../logger';

const config = Config();

export const logger = Logger({
    level: config.get('LOGGER:LEVEL'),
    isDisabled: Boolean(config.get('LOGGER:IS_DISABLED')),
  });

export const commercetools = Commercetools({
    clientId: config.get('COMMERCE_TOOLS:CLIENT_ID'),
    clientSecret: config.get('COMMERCE_TOOLS:CLIENT_SECRET'),
    projectKey: config.get('COMMERCE_TOOLS:PROJECT_KEY'),
    host: config.get('COMMERCE_TOOLS:API_HOST'),
    oauthHost: config.get('COMMERCE_TOOLS:OAUTH_URL'),
    concurrency: config.get('COMMERCE_TOOLS:CONCURRENCY'),
  });