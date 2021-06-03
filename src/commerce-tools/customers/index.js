export default ({ logger, commercetools }) => {
  const service = {};
  const { client, getRequestBuilder } = commercetools;

  service.list = async () => {
    const requestBuilder = getRequestBuilder();
    console.log("Request builder: ", requestBuilder);
    return client
      .execute({
        uri: requestBuilder.customers.search().get(),
      })
      .then(res => res.body);
  };

  return service;
};
