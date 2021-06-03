import Promise from 'bluebird';

export default ({
  logger, products,
}) => {
  const service = {};

  service.run = async (product) => {
    logger.info('Starting service');

    const response = await products.list(product);

    logger.info(`Products: ${JSON.stringify(response.results)}`);

    return response.results;
  };

  return service;
}