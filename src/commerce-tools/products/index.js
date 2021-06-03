export default ({ logger, commercetools }) => {
    const service = {};
    const { client, getRequestBuilder } = commercetools;
  
    service.list = async (product) => {
      const requestBuilder = getRequestBuilder();
        
      return client
        .execute({
        uri: requestBuilder.productProjectionsSearch.parse(
          { text: { value: product, language: 'en-US' } }
          ).build(),
          method: 'GET'
        })
        .then(res => res.body);
    };

    return service;
  };


  //where: ['name(en-US="Schecter Demon")' ]