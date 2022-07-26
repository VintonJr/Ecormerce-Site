import React from 'react'
import {Link} from 'react-router-dom'
import '../css/productlisting.css'
//import { useCart } from 'react-use-cart'
import { useDispatch,useSelector } from 'react-redux'
import productDetailReducer from '../features/slices/productDetailReducer'

export const ProductCard = ({product}) => {

  
  const cart = useSelector(state=>state)
  console.log(cart);
  const dispatch = useDispatch()

  return (
    <div className='product-card'>

      <Link to={`/product/${product.product_name}`}>
      <img src={product.product_image} alt="" /></Link>
      <p>{product.product_name}</p>
      <p> {product.category}</p>
      <p>ksh{product.price}</p>
      

      
        <button 
            className='btn btn-primary'
            onClick={() => dispatch({type: "ADD", payload:product})}
          >Add to cart
        </button>
        

    </div>
  )
}
export default ProductCard;
