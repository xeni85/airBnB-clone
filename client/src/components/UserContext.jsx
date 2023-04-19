import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import {data} from 'autoprefixer'

export const UserContext = createContext({})

export function UserContextProvider ({children}) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (!user) {
           axios.get('/profile').then(({data})=> {
            setUser(data)
           })
           setUser(data)
        }
    }, [])
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

