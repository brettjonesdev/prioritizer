import React from 'react'
import './Repos.scss'

const RepoItem = ({ name, url }) => {
  return (
    <li className="RepoItem">
      <a href={url}>{name}</a>
    </li>
  )
}

export default RepoItem
