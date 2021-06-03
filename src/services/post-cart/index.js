import Promise from 'bluebird';

export default ({
  logger, carts,
}) => {
  const service = {};

  service.run = async (cartId) => {
    logger.info('Starting service');

    const response = await carts.post(cartId).catch(err => console.log(err));

  };

  return service;
}