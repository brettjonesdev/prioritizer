import React from 'react'
import Issues from './Issues'
import { NavLink, useParams } from 'react-router-dom'
import Repos from '../Repos'
import './Repo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Screen for a single GitHub Repo containing a list of Issues
 * @return {*}
 * @constructor
 */
const Repo = () => {
  const { owner, repo } = useParams()
  return (
    <div className="Repo">
      <div className="row">
        <h2 className="title">
          <NavLink to="/">
            <FontAwesomeIcon icon="arrow-left" />
          </NavLink>
          {repo}
        </h2>
        <div className="sidebar">
          <Repos currentRepoName={repo} />
        </div>
        <div className="container">
          <Issues repo={repo} owner={owner} />
        </div>
      </div>
    </div>
  )
}

export default Repo
