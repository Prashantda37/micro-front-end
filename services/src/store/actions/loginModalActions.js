import * as services from '../../services';
import { handleLoginModal } from '../slices';

const { products } = services;

export function handleLoginModalAction () {
  return (dispatch) => {
    dispatch(handleLoginModal());
    // products.getAll(params).then((res) => {
    //   const { data } = res;
    //   dispatch(fetchProducts(data));
    // }).catch((error) => {
    //   console.log(error);
    // });
  };
}
