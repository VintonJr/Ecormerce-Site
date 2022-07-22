import React from 'react'
import {Link} from 'react-router-dom'
export const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <Link to={`/product/${product.product_name}`}>
      <img src={product.product_image} alt="" /></Link>
      <p>{product.product_name}</p>
      <p> {product.category}</p>
      <p>ksh{product.price}</p>
    </div>
  )
}
export default ProductCard;
