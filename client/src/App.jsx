import React from 'react';

import { Route,Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import PageNotFound from './pages/PageNotFound'
import Register from "./pages/register/Register"
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     
      <Header/>
       <Routes>
       
       <Route path="/home" element={<Home/>}/>
       <Route path="/product" element={<ProductDetail/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route  path="*" element={<PageNotFound/>}/>
       
 
       </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
