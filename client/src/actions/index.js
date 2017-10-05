import productsApi from '../api/ProductsApi'
import * as types from '../constants/ActionTypes'

export function loadProducts() {
  return function (dispatch) {
    return productsApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductsSuccess(products) {
  return {type: types.RECEIVE_PRODUCTS_SUCCESS, products};
}
