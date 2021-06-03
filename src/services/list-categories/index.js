import Promise from 'bluebird';

export default ({
  logger, categories,
}) => {
  const service = {};

  service.run = async () => {
    logger.info('Starting service');

    const response = await categories.list();
    logger.info(`Categories: ${JSON.stringify(response.results)}`);

    return response.results;
  };

  return service;
}