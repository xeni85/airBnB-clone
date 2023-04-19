import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        try {await axios.post('/register', {
            name,
            email,
            password,
        })
        alert('Register Success')
        } catch (err) {
            alert('Error: ' + err.message);
        }
        
    }
  return (
    <div className='login-form-container'>
        <h1 className='login-title'>Register</h1>
        <form action="" className='login-form' onClick={register}>
            <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='email'value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='password'value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Register</button>
            <div className='register-container'>
                Do you already have an account?
                <Link to={'/login'} className='register-link'>Login</Link>
            </div>
        </form>
    </div>
  )
}


export default RegisterPage