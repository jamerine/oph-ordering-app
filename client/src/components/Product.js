import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ name, price, short_description }) => (
  <div>
    {name} - &#36;{price}
  </div>
)

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  short_description: PropTypes.string
}

export default Product
