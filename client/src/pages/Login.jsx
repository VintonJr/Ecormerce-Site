import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const data =JSON.stringify({email,password})

  const handleSubmit=(e)=>{
    e.preventDefault();
  
    axios.post("http://localhost:5000/login",data,{
    headers:{'Content-Type': 'application/json'}})
   .then(()=>{
   console.log("Successful")})
}
 
  return (
    <div className='login'>
      <Header/>
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" className="form-control"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-required/>
      <input type="password" className="form-control" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}aria-required/>
       <button type="submit" className="btn btn-primary">Sign in</button>
         </form>
         <Link to="/register"> No Account ?Register </Link>
  <Footer/>
</div>
    
  )
  
  }
export default Login;