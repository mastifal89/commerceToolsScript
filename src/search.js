import Products from './commerce-tools/products';
import ListProducts from './services/list-products';
import { commercetools, logger } from "./utils/commerceToolsKeys";

  require('yargs')
  .scriptName("products")
  .usage('$0 <cmd> [args]')
  .command('* [product]', 'Search Product',(yargs) => {
    yargs.positional('product', {
      type: 'string',
      default: null,
      describe: 'Searchs for product'
    })
  }, function (argv) {

    if(argv.product === null) {
      console.log('You must provide a product text');
      return;
    }

    const products = Products({ logger, commercetools });

    const listProducts = ListProducts({ logger, products });

    const app = {};

    app.service = listProducts;

    app.service.run(argv.product);


  })
  .help()
  .argv

