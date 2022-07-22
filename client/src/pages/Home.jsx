import React,{useEffect} from 'react'
import ProductListing from '../components/ProductListing'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../features/slices/productsReducer'
import { Link } from 'react-router-dom'

const url ="http://localhost:5000/product/viewProduct"
export const Home = () => {
 
  const dispatch = useDispatch()

  
  const products = useSelector(state=>state.products)
  useEffect(() => {
    axios.get(url).then(res=> dispatch(addproducts(res.data.results)))
  }, [dispatch])
    
    return (
    <div className='home'>
      <div id='myCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
          <li data-target='#myCarousel' data-slide-to='1'></li>
          <li data-target='#myCarousel' data-slide-to='2'></li>
          
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active' >
          <img id='carousel-item-image' class="d-block w-100" src="images/slide-3.jpg" alt="First slide"></img>
            <div className='container'>
            <h1>Welcome!</h1>
           
            <p>Supashop ... Home of best deals of up to 70%<br/>Enjoy your shopping.</p>
            <Link to="/register">
            <a href='#' className='btn btn-lg btn-primary'>Sign Up.</a>
            </Link>
            </div>

            
            </div>
            <div className='carousel-item'>
            <img id='carousel-item-image' class="d-block w-100" src="images/slide-2.jpg" alt="First slide"></img>
            <div className='container'>
            <h1>Welcome!</h1>
            <p>Supashop ... Home of best deals of up to 70%<br/>Enjoy your shopping.</p>
            <button>
            <Link to ="/register" >Sign Up.</Link>
            </button>
            </div>

            <div className='carousel-item'>
            <div className='container'>
            <h1>Welcome!</h1>
            <p>Supashop ... Home of best deals of up to 70%<br/>Enjoy your shopping.</p>
            <a href='#' className='btn btn-lg btn-primary'>Sign Up.</a>
            </div>
            </div>

        
          </div>
        </div>

        <a href='#myCarousel' className='carousel-control-prev' role='button' data-slide='prev'>
          
          <span className='carousel-control-prev-icon' aria-hidden={'true'}></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a href='#myCarousel' className='carousel-control-next' role='button' data-slide='prev'>
          <span className='sr-only'>Next</span>
          <span className='carousel-control-next-icon' aria-hidden={'true'}></span>
        </a>
      </div>
      
      
      <ProductListing products={products}/>
      
    </div>
  )
}
export default Home;
