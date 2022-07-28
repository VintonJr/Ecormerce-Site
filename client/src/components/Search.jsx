import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../features/slices/productsReducer'
import ProductListing from './ProductListing'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export const Search = () => {

const {search} =  useParams()
const dispatch = useDispatch()
const products = useSelector(state=>state.products)
    useEffect(() => {
      axios.get(`http://localhost:8000/product/search?product_name=${search}`).then(res=>dispatch(addproducts(res.data)))
    
     }, []
     
     )
     
  return (
    <div>
        <Header/>    
            <ProductListing products={products}/>
    
<Footer/>
    </div>
  )
}
export default Search;
