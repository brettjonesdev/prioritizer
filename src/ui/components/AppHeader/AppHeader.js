import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import { destroySession } from '../../../app/store'

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <div className="title">
        <NavLink to="/">Prioritizer</NavLink>
      </div>
      <div className="logout">
        <a href="/" onClick={destroySession}>
          Log out
        </a>
      </div>
    </div>
  )
}

export default AppHeader
