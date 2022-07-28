import React from 'react';
import { Route,Routes,Navigate } from "react-router-dom";
import Home from './pages/Home';
import Admin from './components/Admin/Admin';
import ProductDetail from './pages/ProductDetail'
import PageNotFound from './pages/PageNotFound'
import Register from "./pages/Register"
import Login from './pages/Login';
import Cart from './pages/Cart';
import Search from './components/Search'
import Products from './components/Admin/Products';
import  CreateProducts  from './components/Admin/CreateProducts';
import Orders from './components/Admin/CreateProducts';
import Users from './components/Admin/CreateProducts';
import UpdateProducts from './components/Admin/pages/UpdateProducts';



function App() {
  return (
    <div className="App">
       <Routes>
       
       <Route path="/home" element={<Home/>}/>
       <Route path="/product/:product_name" element={<ProductDetail/>}/>
       <Route path="/login" element={<Login/>}/>


       <Route path="/admin" element={<Admin/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/create" element={<CreateProducts/>}/>
       <Route path="/register" element={<Register/>}/>

       <Route path="/update" element={<UpdateProducts/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/orders" element ={<Orders/>}/>
       <Route path="/users" element ={<Users/>}/>
       <Route path="/search/:search" element={<Search/>}/>
       <Route  path="*" element={<PageNotFound/>}/>
       
 
       </Routes>
      
    </div>
  );
}

export default App;
