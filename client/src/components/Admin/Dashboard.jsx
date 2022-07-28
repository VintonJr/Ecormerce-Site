import React from 'react'
import Nav from '../Admin/Nav'
import Sidebar from '../Admin/Sidebar'
import Products from '../Admin/Products'
import  Orders from '../Admin/Orders'
import  Users from '../Admin/Users'
import Home from './pages/Home'

function Dashboard() {
  return (
    <div className='dash'>
        <h1>Home</h1>
        <Nav/>
        <div className="container">
            <Sidebar/>
            <Home/>
            <Products/>
            <Orders/>
            <Users/>
            
            
        </div>
    </div>
  )
}
export default Dashboard;