import React from 'react'
import Issues from './Issues'
import { useParams } from 'react-router-dom'

const Repo = () => {
  const { id } = useParams()
  return (
    <div className="Repo">
      Repository {id}
      <Issues />
    </div>
  )
}

export default Repo
