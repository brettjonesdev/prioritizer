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
        <Repos currentRepoName={repo} />
        <Issues repo={repo} owner={owner} />
      </div>
    </div>
  )
}

export default Repo
