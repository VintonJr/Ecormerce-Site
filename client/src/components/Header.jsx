import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import cart from '../images/cart3.svg'

export const Header = () => {
  return (
    <div className='header'>
      
<nav className="navbar ">
  <div className="container-fluid">
    <Link to="/home">
     <img className="navbar-brand"  src={logo} alt="site-logo"/></Link>
     <form className="search- d-flex">
      <input className="search" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
       <img className="cart"  src={cart} alt="cart"/>
        <Link to="/register" className="nav-link" >Register</Link>
        <Link to="/login" className="nav-link" >Login</Link>
        </div>

</nav>
      

      </div>
  )
}
export default Header;
