import React from 'react'
import loading from '../../../img/Spinner-1s-200px.gif'
import './Loading.scss'

const Loading = () => {
  return (
    <div className="Loading">
      <img src={loading} alt="Loading..." width={60} />
    </div>
  )
}

export default Loading
