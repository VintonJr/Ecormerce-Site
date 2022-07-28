import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="sidebarwrapper">
        <div className="sidebarMenu">
          <h3 className="title">
          Dashboard
          </h3>
          <ul className="sidebar-list">
          <Link to="/products"> <li className="list-item active">Products</li></Link> 
            <li className="list-item">Orders</li>
            <li className="list-item">users</li>

          </ul>

        </div>
      </div>
      </div>

    
    
  
   
  )
}
export default Sidebar