import React from 'react';

import { Route,Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';

import ProductDetail from './pages/ProductDetail'
import PageNotFound from './pages/PageNotFound'
import Register from "./pages/Register"
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
     
      <Header/>
       <Routes>
       
       <Route path="/home" element={<Home/>}/>
       <Route path="/product/:product_name" element={<ProductDetail/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route  path="*" element={<PageNotFound/>}/>
       
 
       </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
