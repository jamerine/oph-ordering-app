class ProductsApi {
  static getAllProducts() {
    return fetch('http://localhost:5000/api/v1/products')
      .then(response => {
        return response.json()
      })
      .catch(error => {
        return error
      })
  }
}

export default ProductsApi
