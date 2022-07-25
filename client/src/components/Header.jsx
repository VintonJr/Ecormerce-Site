import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'
import cart from '../images/cart3.svg'

export const Header = () => {


const [search, setSearch]=useState('');
 const searchProduct = async(e)=>{
        e.preventDefault();
             }
  const changeHandler=(e)=>{
    setSearch(e.target.value);
  } 
   return (
    <div className='header'>
      
<nav className="navbar ">
  <div className="container-fluid">
    <Link to="/home">
     <img className="navbar-brand"  src={logo} alt="site-logo"/></Link>
     <form className="search- d-flex" onSubmit={searchProduct}>
      <input className="search" type="search" placeholder="Search" onChange={changeHandler}  value={search}aria-label="Search"/>
      <Link to={`/search/${search}`}><button className="btn btn-outline-success" type="submit" >Search</button></Link>
    </form>
    <Link to={"/Cart"}>
       <img className="cart"  src={cart} alt="cart"/>
       </Link>
        <Link to="/register" className="nav-link" >Register</Link>
        <Link to="/login" className="nav-link" >Login</Link>
        </div>

</nav>
      <div>
             {/* <ProductListing products ={products}/> */}
      {/* {results.map((result) =>{<div key={result.product_id}><p>{result.product_name}</p> </div>})} */}
      </div>
      </div>
  )
}

export default Header;
