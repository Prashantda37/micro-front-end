import * as services from '../../services';
import { fetchProducts } from '../slices';

const { products } = services;

export function fetchProductsAction (params) {
  return (dispatch) => {
    products.getAll(params).then((res) => {
      const { data } = res;
      dispatch(fetchProducts(data));
    }).catch((error) => {
      console.log(error);
    });
  };
}
