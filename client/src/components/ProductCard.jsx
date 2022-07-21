import React from 'react'
import {Link} from 'react-router-dom'
import '../css/register.css'
export const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
    <Link to="/product">
  <img src={product.product_image} alt="" /></Link>
  <p>{product.product_name}</p>
  <p> {product.category}</p>
   <p>Ksh.{product.price}</p>
   <Link to="/cart"><button className='btn btn-primary'>Add to cart</button></Link>
   
    </div>
  )
}
export default ProductCard;
