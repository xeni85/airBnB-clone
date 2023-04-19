import React, {useContext} from 'react'
import { UserContext } from '../components/UserContext'
import {useNavigate, Link, useParams} from 'react-router-dom'

const AccountPage = () => {
  const {ready, user} = useContext(UserContext)
  const navigate = useNavigate()
    if(!ready) {
      return 'Loading...'
    }

    if (ready && !user) {
      return navigate('/login')
    }

    let {subpage} = useParams();
    if(subpage === undefined) {subpage = 'profile';}
    function linkClasses (type=null) {
      let classes = 'my-bookings';
      if(type === subpage) {classes += ' my-profile'}
      return classes
    }
    return (<div>
      <nav className='account-links-container'>
        <Link to={'/account'} className={linkClasses('profile')}>My profile</Link>
        <Link to={'/account/bookings'} className={linkClasses('bookings')}>My bookings</Link>
        <Link to={'/account/places'} className={linkClasses('places')}>My places</Link>
      </nav>
    </div>)
}

export default AccountPage