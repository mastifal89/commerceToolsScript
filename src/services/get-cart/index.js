import Promise from 'bluebird';

export default ({
  logger, carts,
}) => {
  const service = {};

  service.run = async (id) => {
    logger.info('Starting service');

    const response = await carts.list(id);
    logger.info(`Carts: ${JSON.stringify(response)}`);

    return response;
  };

  return service;
}