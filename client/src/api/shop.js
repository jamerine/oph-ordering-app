/**
 * Mocking client-server processing
 */
 import axios from 'axios';

 const ROOT_URL = 'http://localhost:30001/api/v1';

//
// import _products from './products.json'
//
//
//
// export default {
//   getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT)
// }

export function getProducts() {
  const request =
    axios.get(`${ROOT_URL}/products`)
     .then(function(result){
          YourAction.getAllFlights(result)
     })
  })

  return {
    type: RECEIVE_PRODUCTS,
    payload: request
  };
}
