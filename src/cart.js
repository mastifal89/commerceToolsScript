import Cart from './commerce-tools/cart';
import PostCart from './services/post-cart';
import { commercetools, logger } from "./utils/commerceToolsKeys";

  require('yargs')
  .scriptName("cart")
  .usage('$0 <cmd> [args]')
  .command('* [productId]', 'Creates an anonymous cart',(yargs) => {
    yargs.positional('productId', {
      type: 'string',
      default: '',
      describe: 'creates an anonymous cart'
    })
  }, function (argv) {
    
    if(argv.productId === null) {
      console.log('You must provide a product id');
      return;
    }

    const carts = Cart({ logger, commercetools });

    const postCart = PostCart({ logger, carts });

    const app = {};

    app.service = postCart;

    app.service.run(argv.productId);

  })
  .help()
  .argv