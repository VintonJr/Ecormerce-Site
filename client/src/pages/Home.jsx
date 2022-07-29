import React,{useEffect} from 'react'
import ProductListing from '../components/ProductListing'
import axios from 'axios'
import c1 from '../images/978013.jpg'
import c2 from '../images/top-image-4.jpg'
import c3 from '../images/main.jpg'

import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../features/slices/productsReducer'
import Paginator from '../components/Paginator'
import Header from '../components/Header'
//import { Link } from 'react-router-dom'

const url ="http://localhost:8000/product/viewProduct"
export const Home = () => {
 
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  useEffect(() => {
    axios.get(url).then(res=> dispatch(addproducts(res.data.results)))
  }, [])
    // console.log(products)
    return (
      
    <div className='home'>

<Header />


     
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  className="carousel-inner-img" src={c1}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="carousel-inner-img" src={c2}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="carousel-inner-img" src={c3}  alt="..."/>
    </div>
  
  </div>
  
</div>

      
      
      <div>
      <ProductListing products={products}/>
      <Paginator/>
      </div>
      </div>
    
    
  )
}
export default Home;
