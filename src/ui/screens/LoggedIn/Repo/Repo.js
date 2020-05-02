import React from 'react'
import Issues from './Issues'
import { useParams } from 'react-router-dom'
import Repos from '../Repos'
import './Repo.scss'

const Repo = () => {
  const { owner, repo } = useParams()

  return (
    <div className="Repo">
      <div className="row">
        <h2 className="title">{repo}</h2>
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
