import Config from './config';
import Logger from './logger';
import Customers from './commerce-tools/customers';
import Products from './commerce-tools/products';
import Categories from './commerce-tools/categories';
import Cart from './commerce-tools/cart';

import ListCustomers from './services/list-customers';
import ListProducts from './services/list-products';
import ListCategories from './services/list-categories';
import PostCart from './services/post-cart';
import ListCarts from './services/get-cart';

import { commercetools, logger } from "./utils/commerceToolsKeys";

const customers = Customers({ logger, commercetools });
const products = Products({ logger, commercetools });
const categories = Categories({ logger, commercetools });
const carts = Cart({ logger, commercetools });

const listCustomers = ListCustomers({ logger, customers });
const listProducts = ListProducts({ logger, products });
const listCategories = ListCategories({ logger, categories });
const postCart = PostCart({ logger, carts })
const listCarts = ListCarts({ logger, carts })

const app = {};

app.service = listCarts;

app.service.run('d2b97eb4-a401-4b13-809b-bb91cf93dfbb').then(resp => console.log(resp));

export default app;