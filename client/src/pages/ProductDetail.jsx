import React,{useEffect} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../features/slices/productDetailReducer';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'
export const ProductDetail = () => {
  const {product_name}=useParams();
  const dispatch=useDispatch();
  const detail=useSelector(state=>state.detail)
  useEffect(() => {
    
    axios.get(`http://localhost:8000/product/product/${product_name}`).then(res=>{
    
    dispatch (addProductDetail (res.data.results))})
    
  
  }, [])
  console.log(detail)
  
  return (
 <div className='product' >
  <Header/>
        <img src={detail.product_image} alt="" />
        <p>{detail.product_name}</p>
        <p> {detail.category}</p>
        <small className='price'>${detail.price}</small>
        <button className='btn btn-primary'>Add to cart</button>
        <Footer/>
        </div>
   
    

 
  )
}
export default ProductDetail;