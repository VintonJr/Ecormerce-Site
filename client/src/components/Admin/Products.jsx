import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../../features/slices/productsReducer'
import axios from 'axios'
const url ="http://localhost:8000/product/viewProduct"

export const Products = () => {
const dispatch = useDispatch()
const products = useSelector(state=>state.products)
useEffect(() => {
axios.get(url).then(res=> dispatch(addproducts(res.data.results)))
  }, [])
  console.log(products)
  return (
    <div>
     
    </div>
  )
}
export default Products;