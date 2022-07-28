import React,{useEffect,useState} from 'react'
import ProductListing from '../components/ProductListing'
import axios from 'axios'
<<<<<<< HEAD
import c1 from '../images/978013.jpg'
import c2 from '../images/top-image-4.jpg'
=======
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

import { Link, useParams } from 'react-router-dom';
import c1 from '../images/editedimages.jpg'
import c2 from '../images/download.jpg'
>>>>>>> origin/search
import c3 from '../images/main.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch,useSelector } from 'react-redux'
import { addproducts } from '../features/slices/productsReducer'
<<<<<<< HEAD
import Paginator from '../components/Paginator'
//import { Link } from 'react-router-dom'
=======
>>>>>>> origin/search

export const Home = () => {
  const[page,setPage]=useState(1)
  const[rowcount,setRowcount]=useState(3)
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
  const handlePrevious = ()=>{
    if (page===1) {
      return page
    }
    setPage(page-1)
  }

  const handleNext = ()=>{
    setPage(page+1)
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/product/productPagination?row_count=${rowcount}&page_number=${page}`).then(res=> dispatch(addproducts(res.data)))
  }, [page,rowcount])
    // console.log(products)
    return (
      
    <div className='home'>

<<<<<<< HEAD
     
=======
     <Header/>
>>>>>>> origin/search
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
<<<<<<< HEAD
      <Paginator/>
=======
      <Pagination>
        <Pagination.Prev onClick={handlePrevious}/>
                <Pagination.Item >{page}</Pagination.Item>

    <Pagination.Next  onClick={handleNext}/>
       </Pagination>
        <input type="number" id='rowcount' value={rowcount} onChange={e=>setRowcount(e.currentTarget.value)}/>
     
>>>>>>> origin/search
      </div>
      <Footer/>
      </div>
    
    
  )
}
export default Home;
