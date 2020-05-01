import React from 'react'
import { useDispatch } from 'react-redux'
import { clearApiKey } from '../../../state/slices/apiKey'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'

const AppHeader = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(clearApiKey())
  }
  return (
    <div className="AppHeader">
      <div className="title">Prioritizer</div>
      <div className="logout">
        <NavLink to="/" onClick={handleLogout}>
          Log out
        </NavLink>
      </div>
    </div>
  )
}

export default AppHeader
