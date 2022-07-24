import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'
import cart from '../images/cart3.svg'
import axios from 'axios'
import {useParams}from 'react-router-dom'


export const Header = () => {
  const {product_name}=useParams();

  const [query, setQuery]=useState('');
  const searchProduct = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      
      const url=`http://localhost:8000/product/product/viewProduct?&query=${query}`;
      const res= await axios.get(url);
     
      console.log(res.data);
      setQuery(res.data.results[0]);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  } 
   return (
    <div className='header'>
      
<nav className="navbar ">
  <div className="container-fluid">
    <Link to="/home">
     <img className="navbar-brand"  src={logo} alt="site-logo"/></Link>
     <form className="search- d-flex" onSubmit={searchProduct}>
      <input className="search" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" value={query} onChange={changeHandler}>Search</button>
    </form>
    <Link to={"/Cart"}>
       <img className="cart"  src={cart} alt="cart"/>
       </Link>
        <Link to="/register" className="nav-link" >Register</Link>
        <Link to="/login" className="nav-link" >Login</Link>
        </div>

</nav>
      

      </div>
  )
}
export default Header;
