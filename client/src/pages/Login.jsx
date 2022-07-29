import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const initialValues = {
    "email": "",
    "password":"",
  };


  const [values,setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
  
    axios.post("http://localhost:5000/login",values)
   .then(
    res => {
      localStorage.setItem("currentUuser",JSON.stringify(res.data.user))
      localStorage.setItem("currentToken",JSON.stringify(res.data.token))
      console.log('logged in successfully!');
      alert('Logged in successfully')
      navigate('/home')
    } ).catch(err => {
      console.log(err)
    })
    
}
 
  return (
    <>
    <Header/>
    <div className='login'>
            

    <form className="login-form">
      <label>Email:</label>
      <input 
          type="email" 
          className="form-control" 
          placeholder="email" 
         name='email'
          onChange={handleInputChange} 
          aria-required/>
      <label>Password:</label>
      <input 
          type="password" 
          className="form-control" 
          placeholder="Password"  
          onChange={handleInputChange}
          aria-required/>
      <Link to={"/home"}>
          <button 
              type="submit" 
              className="btn btn-primary"
              onClick={(e) => {handleSubmit(e)}}
            >Sign in</button>
      </Link>
       
         </form>
         
         <Link to="/register"> <span className="span-register">No Account? Register </span></Link>
  
</div>
</>
    
  )
  
  }
export default Login;