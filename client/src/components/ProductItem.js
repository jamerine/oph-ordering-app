import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      name={product.name}
      price={product.price}
      short_description={product.short_description} />
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    short_description: PropTypes.string.isRequired
  }).isRequired
}

export default ProductItem
