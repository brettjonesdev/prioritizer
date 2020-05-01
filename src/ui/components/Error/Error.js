import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Error.scss'

const Error = ({ message }) => {
  return (
    <div className="Error">
      <FontAwesomeIcon className="icon" icon="exclamation-circle" size="md" />
      <div className="message">{message}</div>
    </div>
  )
}

export default Error
