import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="side-bar">
        
    <Link to="/products"> Products</Link><br></br>
    <Link to="/orders">Orders</Link><br></br>
    <Link to="/users">Users</Link><br></br>
    
    
   </div>
  )
}
export default Sidebar