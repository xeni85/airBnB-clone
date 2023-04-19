import React, {useContext} from 'react'
import { UserContext } from '../components/UserContext'

const AccountPage = () => {
  const {user} = useContext(UserContext)
  return (
    <div>Account page for {user.name}</div>
  )
}

export default AccountPage