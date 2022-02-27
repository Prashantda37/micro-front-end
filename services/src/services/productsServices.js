import { ApiCore } from '../provider';
const url = '/products';

function ProductsServices (url) {
  ApiCore.call(this, url);
}

export const products = new ProductsServices(url);
