import React, { useState } from 'react'
import '../css/register.css' 
import{Link}from'react-router-dom'
import axios from 'axios'


function Register(){
  const[user_name, setUsername]=useState('');
  const[first_name,setFirstName]=useState('');
  const[last_name,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();

    const data = JSON.stringify({user_name,first_name,last_name,email,password});

    axios.post('http://localhost:5000/register',data,{
      headers: {'Content-Type': 'application/json'},
    })
    .then(() =>{
      console.log('Registered successful!')
    });
  };
  



  return (
    <div className='register'>
      <section className="register-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input 
          type="text"
          id="username"
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          required
          />
          <label>First Name:</label>
          <input
          type="text"
          id="firstname"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='Enter First name'
          required
          />
          <label>Last Name:</label>
          <input
          type="text"
          id="lasttname"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Enter Last Name'
          required
          />
          <label>Email:</label>
          <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
          required
          />
          <label>Password:</label>
          <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
          required
          />
          <Link to="/register">
          <button id='register-btn' className='btn btn-primary'>Register.</button>
          </Link>
          <p>Already Registered?<br />
                <span>
                  <Link to="/login">Sign in</Link>
                </span>
            
              </p>
        </form>
      </section>

    </div>
  )
  }
export default Register;