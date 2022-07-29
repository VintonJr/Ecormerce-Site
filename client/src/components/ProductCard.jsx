import React from 'react'
import {Link} from 'react-router-dom'
import '../css/productlisting.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/slices/cartReducer'

export const ProductCard = ({product}) => {

  const dispatch=useDispatch();

 const handleAddToCart = (product)=>{

  dispatch(addToCart(product))
 }

  return (
    <div className='product-card'>
      <Link to={`/product/${product.product_name}`}>
      <img src={product.product_image} alt="" /></Link>
      <p>Name: {product.product_name}</p>
      <p>Price: Ksh {product.price}</p>
      
      <Link to="/cart"> <button className='btn btn-primary'onClick={()=> handleAddToCart(product)}>Add to cart
        </button></Link>
        

    </div>
  )
}
export default ProductCard;
