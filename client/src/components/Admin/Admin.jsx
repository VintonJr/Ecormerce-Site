import React from 'react'
import logo from '../../images/logo1.png'
import Sidebar from './Sidebar'
import {Link } from 'react-router-dom'

export const Admin = ({product}) => {
  return (
  <div className="admin-board">
  <nav className="navbar ">
  <div className="container-fluid">
    <Link to="/home">
     <img className="navbar-brand"  src={logo} alt="site-logo"/></Link>
     <Link to="/home">  <button className="btn btn-outline-success" type="submit" >Logout</button></Link>
        </div>
        </nav>
        
   <Sidebar/>

    
     </div>
  )
}
export default Admin