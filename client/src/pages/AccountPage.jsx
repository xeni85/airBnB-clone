import React, {useContext} from 'react'
import { UserContext } from '../components/UserContext'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'

const AccountPage = () => {
  const {ready, user} = useContext(UserContext)
  const navigate = useNavigate()
  let {subpage} = useParams();
  if(subpage === undefined) {subpage = 'profile';}

  async function logout() {
    await axios.post('/logout')
  }

  function linkClasses (type=null) {
    let classes = 'my-bookings';
    if(type === subpage) {classes += ' my-profile'}
    return classes
  }
    if(!ready) {
      return 'Loading...'
    }

    if (ready && !user) {
      return navigate('/login')
    }

  
    return (<div>
      <nav className='account-links-container'>
        <Link to={'/account'} className={linkClasses('profile')}>My profile</Link>
        <Link to={'/account/bookings'} className={linkClasses('bookings')}>My bookings</Link>
        <Link to={'/account/places'} className={linkClasses('places')}>My places</Link>
      </nav>
      {subpage === 'profile' && (
        <div className='profile-container'> 
          Logged in as {user.name} ({user.email})
          <button className='profile-logout-button login-form-button' onClick={logout}>
              Logout
          </button>
        </div>
      )}
    </div>)
}

export default AccountPage