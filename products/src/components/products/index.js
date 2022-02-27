import React from 'react';
import { fetchProductsAction } from 'store/actions';
import { useStore } from 'store/store';

export function Products (props) {
  const { currentState, dispatcher } = useStore('products');
  return (
    <div>
      <div className="text-2xl">Products: </div>
      <button className="border border-gray p-1 rounded bg-blue-500 text-white" onClick={ () => dispatcher(fetchProductsAction()) }>Fetch Products</button>
      {
        currentState?.products.map((item) => {
          return (
            <div key={ item.id }>{item.title}</div>
          );
        })
      }
    </div>
  );
}
