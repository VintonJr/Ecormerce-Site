import React from 'react'
import Nav from './Admin'
import Sidebar from '../Admin/Sidebar'
import CreateProducts from './CreateProducts'
import  Orders from '../Admin/Orders'
import  Users from '../Admin/Users'
import Home from './pages/Home'
import UpdateProducts from './pages/UpdateProducts'

function Dashboard() {
  return (
    <div className='dash'>
        <h1>Home</h1>
        <Nav/>
        <div className="container">
            <Sidebar/>
            <Home/>
    <CreateProducts/>
    <UpdateProducts/>
            <Orders/>
            <Users/>
            
            
        </div>
    </div>
  )
}
export default Dashboard;