import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLoginSubmit (e) {
        e.preventDefault();
        try {
            const {data} = await axios.post('/login', {email,password});
            setUser(data);
            alert('Login successful');
            setRedirect(true);
          } catch (e) {
            alert('Login failed');
          }
        }
    return (
    <div className='login-form-container' onSubmit={handleLoginSubmit}>
        <h1 className='login-title'>Login</h1>
        <form action="" className='login-form'>
            <input type="email" placeholder='email'value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='password'value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Login</button>
            <div className='register-container'>
                Don't have an account yet?
                <Link to={'/register'} className='register-link'>Register now</Link>
            </div>
        </form>
    </div>
  )
}


export default LoginPage