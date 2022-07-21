import React,{useEffect,useState} from 'react'
import ProductListing from '../components/ProductListing'
import axios from 'axios'
const url ="http://localhost:5000/product/viewProduct"
export const Home = () => {
  const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(url).then(res=> setProducts(res.data.results))
    }, [])
    console.log(products)
    return (
    <div className='home'>
    <ProductListing products={products}/>
      
      </div>
  )
}
export default Home;
