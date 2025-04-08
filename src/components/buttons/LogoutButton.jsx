import React from 'react'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const LogoutButton = () => {
  const { setIsAuthenticated } = useContext(AuthContext)

  const handleLogout = () => {
    setIsAuthenticated(false)   
  }
    
  return (
    <div>
      <button 
        className="button-logout" 
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton

