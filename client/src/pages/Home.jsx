import React,{useEffect} from 'react'
import ProductListing from '../components/ProductListing'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../features/slices/productsReducer'
const url ="http://localhost:5000/product/viewProduct"
export const Home = () => {
 
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(() => {
    axios.get(url).then(res=> dispatch(addproducts(res.data.results)))
  }, [dispatch])
    
    return (
    <div className='home'>
    <ProductListing products={products}/>
      
      </div>
  )
}
export default Home;
