export default ({ logger, commercetools }) => {

    const service = {};
    const { client, getRequestBuilder } = commercetools;
  
    service.post = async (cartId) => {
      const requestBuilder = getRequestBuilder();
        
      return client
        .execute({
        uri: requestBuilder.orders.build(),
          method: 'POST',
          body: {
              cart: {
                  id: cartId
              },
              version: 1
          }
        })
        .then(res => res.body).then(res => console.log(res)).catch(err => console.log(err.body));
    };

    return service;
  };