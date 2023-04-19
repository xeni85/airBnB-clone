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
      <nav>
        <Link to={'/account/bookings'}>My bookings</Link>
        <Link to={'/account/places'}>My places</Link>
      </nav>
    </div>)
}

export default AccountPage