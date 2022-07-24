import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'
import cart from '../images/cart3.svg'
import axios from 'axios'

import Home from '../pages/Home'
export const Header = () => {
const[results,setResults]=useState('')
  const [query, setQuery]=useState('');
  const searchProduct = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      
      const url=` http://localhost:8000/product/search?product_name=${query}`;
      const res= await axios.get(url);
      console.log(res.data);
      console.log(query)
     
      setResults(res.data)
      console.log(results)
      
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
      <input className="search" type="search" placeholder="Search"onChange={changeHandler}  value={query}aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" >Search</button>
    </form>
    <Link to={"/Cart"}>
       <img className="cart"  src={cart} alt="cart"/>
       </Link>
        <Link to="/register" className="nav-link" >Register</Link>
        <Link to="/login" className="nav-link" >Login</Link>
        </div>

</nav>
      <div>
        {results.map}
      </div>
      </div>
  )
}
export default Header;
