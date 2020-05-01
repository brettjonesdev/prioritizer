import React from 'react'
import './Repos.scss'
import { NavLink } from 'react-router-dom'

const RepoItem = (props) => {
  const { name, id } = props
  return (
    <li className="RepoItem">
      <NavLink to={`/${id}`}>{name}</NavLink>
    </li>
  )
}

export default RepoItem
