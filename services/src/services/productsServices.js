import { ApiCore } from '../provider';

const url = '/products';

function ProductsServices (resource) {
  ApiCore.call(this, resource);
}

export const products = new ProductsServices(url);
