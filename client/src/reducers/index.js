import { combineReducers } from 'redux'
import products, * as fromProducts from './products'

export default combineReducers({
  products
})

// const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
