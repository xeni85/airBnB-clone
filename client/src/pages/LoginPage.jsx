import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../components/UserContext'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    async function login (e) {
        e.preventDefault();
        try {
            const {data} = await axios.post('/login', {email,password});
            alert('Login successful');
            setRedirect(true);
          } catch (e) {
            alert('Login failed');
          }
        }

        if(redirect) {
            return navigate('/')
        }
    return (
    <div className='login-form-container' >
        <h1 className='login-title'>Login</h1>
        <form action="" className='login-form' onSubmit={login}>
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