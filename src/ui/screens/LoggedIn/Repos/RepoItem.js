import React from 'react'
import './Repos.scss'
import { NavLink } from 'react-router-dom'

const RepoItem = (props) => {
  const { name, owner, current } = props
  return (
    <li className="RepoItem">
      <NavLink to={`/${owner.login}/${name}`}>
        {current ? <b>{name}</b> : name}
      </NavLink>
    </li>
  )
}

export default RepoItem
