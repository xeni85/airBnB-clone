import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-form-container'>
        <h1 className='login-title'>Login</h1>
        <form action="" className='login-form'>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
        </form>
    </div>
  )
}


export default LoginPage