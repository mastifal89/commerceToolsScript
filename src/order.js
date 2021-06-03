import Order from './commerce-tools/order';
import PostOrder from './services/post-order';
import { commercetools, logger } from "./utils/commerceToolsKeys";

  require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('* [cartId]', 'Cart Id input parameter',(yargs) => {
    yargs.positional('cartId', {
      type: 'string',
      default: null,
      describe: 'Cart Id input parameter'
    })
  }, function (argv) {

    if(argv.cartId === null) {
      console.log('You must provide a cart id');
      return;
    }
      
    const orders = Order({ logger, commercetools });

    const postOrder = PostOrder({ logger, orders });

    const app = {};

    app.service = postOrder;

    app.service.run(argv.cartId);

  })
  .help()
  .argv