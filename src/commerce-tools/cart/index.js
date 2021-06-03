import { request } from "http";

export default ({ logger, commercetools }) => {
    const service = {};
    const { client, getRequestBuilder } = commercetools;
  
    service.post = async (productId) => {
      const requestBuilder = getRequestBuilder();
        console.log("entro: ", productId)
      return client
        .execute({
        uri: requestBuilder.carts.build(),
          method: 'POST',
          body: {
              anonymousId: '1',
              currency: 'USD',
              lineItems: [
                {
                    productId: productId
                }
              ],
              shippingAddress: 
                  {
                    title: 'Calle Prueba',
                    country: 'US',
                    state: 'US',
                    taxRate: 'US'
                  }
              
          }
        })
        .then(res => res.body).then(res => console.log(res)).catch(err => console.log(err.body));
    };

    service.list = async (id) => {
        console.log(id)
        const requestBuilder = getRequestBuilder();
        return client
        .execute({
            uri: requestBuilder.carts.byId(id).build(),
            method: 'GET'
        })
        .then(res => res.body).catch(err => console.log(err));
    }

    return service;
  };