import React,{useEffect} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../features/slices/productDetailReducer';
import { useDispatch, useSelector } from 'react-redux';
import '../css/productdetail.css'

export const ProductDetail = () => {
  const {product_name}=useParams();
  const dispatch=useDispatch();
  const detail=useSelector(state=>state.detail)
  useEffect(() => {
    
    axios.get(`http://localhost:8000/product/product/${product_name}`).then(res=>{
    
    dispatch (addProductDetail (res.data.results[0]))})
    
  
  }, [])
  console.log(detail)
  
  return (
 <div className='product' >
  
        <img src={detail.product_image} alt="" />
        <p>{detail.product_name}</p>
        <p> {detail.category}</p>
        <p>{detail.description}</p>
        <p>Ksh.{detail.price}</p>
        
        <button 
            className='btn btn-primary'
                >Add to cart</button>
        </div>
   
    

 
  )
}
export default ProductDetail;