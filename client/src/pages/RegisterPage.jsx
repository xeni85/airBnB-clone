import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='login-form-container'>
        <h1 className='login-title'>Login</h1>
        <form action="" className='login-form'>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
            <div className='register-container'>
                Don't have an account yet?
                <Link to={'/register'} className='register-link'>Register now</Link>
            </div>
        </form>
    </div>
  )
}


export default RegisterPage