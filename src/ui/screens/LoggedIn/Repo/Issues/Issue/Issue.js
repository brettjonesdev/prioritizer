import React from 'react'
import './Issue.scss'
import moment from 'moment/moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Issue = ({ title, id, updated_at, created_at, assignee, provided }) => {
  return (
    <tr
      className="Issue"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <td className="handle">
        <FontAwesomeIcon icon="bars" />
      </td>
      <td>{title}</td>
      <td>{moment(created_at).fromNow()}</td>
      <td>{moment(updated_at).fromNow()}</td>
      <td className="avatar">
        {assignee && (
          <img
            src={assignee.avatar_url}
            alt="Assignee avatar"
            title={`Assigned to ${assignee.login}`}
          />
        )}
      </td>
    </tr>
  )
}

export default Issue
