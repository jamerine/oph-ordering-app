import productsApi from '../api/ProductsApi'
import shop from '../api/shop'
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

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  dispatch(addToCartUnsafe(productId))
}


export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
