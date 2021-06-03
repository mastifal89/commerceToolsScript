import Promise from 'bluebird';

export default ({
  logger, customers,
}) => {
  const service = {};

  service.run = async () => {
    logger.info('Starting service');

    const response = await customers.list();
    logger.info(`Customers: ${JSON.stringify(response.results)}`);

    return response.results;
  };

  return service;
}