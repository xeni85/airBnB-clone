import React, {useContext} from 'react'
import { UserContext } from '../components/UserContext'
import {useNavigate, Link} from 'react-router-dom'

const AccountPage = () => {
  const {ready, user} = useContext(UserContext)
  const navigate = useNavigate()
    if(!ready) {
      return 'Loading...'
    }

    if (ready && !user) {
      return navigate('/login')
    }
    return (<div>
      <nav className='account-links-container'>
        <Link to={'/account'} className='my-profile'>My profile</Link>
        <Link to={'/account/bookings'} className='my-bookings'>My bookings</Link>
        <Link to={'/account/places'} className='my-places'>My places</Link>
      </nav>
    </div>)
}

export default AccountPage