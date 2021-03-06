import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'


const products = (state, action) => {
  return state
}


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS_SUCCESS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
