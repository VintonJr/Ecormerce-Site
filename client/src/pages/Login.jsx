import React from 'react'

export const Login = () => {
  return (
    <div className='login'>
    
  <form className="login-form">
    <label for="email1" className="form-label">Email address</label>
      <input type="email" className="form-control"  placeholder="email" aria-required/>
     <label for="password" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder="Password" aria-required/>
       <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  
</div>
    
  )
}
export default Login;