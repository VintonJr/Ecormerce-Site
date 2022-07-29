import React, { useState } from 'react'
import '../css/register.css' 
import{Link, useNavigate}from'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Register = () => {
  
  const initialValues = {
    "user_name":"",
    "first_name":"",
    "last_name":"",
    "email":"",
    "password":"",
    
  };

  const [values,setValues]=useState(initialValues);

  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setValues ({
      ...values,
      [name]:value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios
    .post('http://localhost:5000/register',values).then(
      res => {
        alert("Registered successfuly!")
        navigate('/login')
      }
    ).catch (err =>{
      console.log(err)
    })
  }
  



  return (
    <div className='register'>
      <Header/>
      <section className="register-card">
        <h1>Register</h1>
        <form >
          <label>Username:</label>
          <input 
          type="text"
          id="username"
          name='user_name'
          onChange={handleInputChange}
          placeholder="Enter Username"
          required
          />
          <label>First Name:</label>
          <input
          type="text"
          id="firstname"
          name='first_name'
          onChange={handleInputChange}
          placeholder='Enter First name'
          required
          />
          <label>Last Name:</label>
          <input
          type="text"
          id="lasttname"
          name='last_name'
          onChange={handleInputChange}
          placeholder='Enter Last Name'
          required
          />
          <label>Email:</label>
          <input
          type="email"
          id="email"
          name='email'
          onChange={handleInputChange}
          placeholder='Enter email'
          required
          />
          <label>Password:</label>
          <input
          type="password"
          id="password"
          name='password'
          onChange={handleInputChange}
          placeholder='Enter password'
          required
          />
          
          <button 
              id='register-btn' 
              className='btn btn-primary'
              onClick={(e)=>{handleSubmit(e)}}>Register.</button>
          <p>Already Registered?<br />
                <span>
                  {/*router link*/}
                  <Link to="/login">Sign in</Link>
                </span>
            
              </p>
        </form>
      </section>
<Footer/>
    </div>
  )
  }
export default Register;