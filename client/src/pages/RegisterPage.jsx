import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='login-form-container'>
        <h1 className='login-title'>Register</h1>
        <form action="" className='login-form'>
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
            <div className='register-container'>
                Do you already have an account?
                <Link to={'/login'} className='register-link'>Login</Link>
            </div>
        </form>
    </div>
  )
}


export default RegisterPage