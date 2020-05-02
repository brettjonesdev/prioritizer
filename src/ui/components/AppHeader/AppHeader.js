import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import { destroySession } from '../../../app/store'
import { useSelector } from 'react-redux'
import { selectApiKey } from '../../screens/EnterApiKey/state'

const AppHeader = () => {
  const apiKey = useSelector(selectApiKey)
  return (
    <div className="AppHeader">
      <div className="title">
        <NavLink to="/">Prioritizer</NavLink>
      </div>
      {apiKey && (
        <div className="logout">
          <a href="/" onClick={destroySession}>
            Log out
          </a>
        </div>
      )}
    </div>
  )
}

export default AppHeader
