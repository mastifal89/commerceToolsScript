import Promise from 'bluebird';

export default ({
  logger, orders,
}) => {
  const service = {};

  service.run = async (cartId) => {
    logger.info('Starting service');

    const response = await orders.post(cartId).catch(err => console.log(err));

  };

  return service;
}