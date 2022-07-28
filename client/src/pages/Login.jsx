import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 


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
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" className="form-control"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-required/>
      <label>Password:</label>
      <input type="password" className="form-control" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}aria-required/>
      <Link to={"/home"}>
          <button type="submit" className="btn btn-primary">Sign in</button>
      </Link>
       
         </form>
         
         <Link to="/register"> <span className="span-register">No Account? Register </span></Link>
  
</div>
    
  )
  
  }
export default Login;