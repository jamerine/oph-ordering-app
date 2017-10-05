import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products }) => (
  <ProductsList title="Products">
    { products.map(product =>
      <ProductItem
        key={product.id}
        product={product} />
    )}
  </ProductsList>
)

ProductsContainer.PropTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    short_description: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps
)(ProductsContainer)
