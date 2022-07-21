import React from 'react'
import {Link} from 'react-router-dom'
export const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
    <div className="card-body">
<Link to="/product">
  <img className="product-img" src={product.product_image}  alt="product-pic"/> </Link>  
 <p>{product.product_name}</p>
 <p>{product.product_price}</p>
</div>
    </div>
  )
}
export default ProductCard;
