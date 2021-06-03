export default ({ logger, commercetools }) => {
    const service = {};
    const { client, getRequestBuilder } = commercetools;
  
    service.list = async () => {
      const requestBuilder = getRequestBuilder();
        
      return client
        .execute({
        uri: requestBuilder.categories.build(),
          method: 'GET'
        })
        .then(res => res.body);
    };

    return service;
  };