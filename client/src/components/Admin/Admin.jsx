import React from 'react'
import logo from '../../images/logo1.png'
import Sidebar from './Sidebar'

export const Admin = ({product}) => {
  return (
  <div className="admin-board">
  <nav className="navbar ">
  <div className="container-fluid">
     <img className="navbar-brand"  src={logo} alt="site-logo"/>
     <button className="btn btn-outline-success" type="submit" >Logout</button>
        </div>
        </nav>
        

    
     </div>
  )
}
export default Admin