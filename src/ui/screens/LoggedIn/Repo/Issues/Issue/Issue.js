import React from 'react'
import './Issue.scss'
import moment from 'moment/moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Issue = ({
  title,
  updated_at,
  created_at,
  assignee,
  snapshot,
  provided,
}) => {
  const dragStyle = snapshot.isDragging
    ? { backgroundColor: '#eee', display: 'table' }
    : undefined
  const dragNDropProps = {
    ...provided.draggableProps,
    ...provided.dragHandleProps,
  }
  const style = {
    ...dragNDropProps.style,
    ...dragStyle,
  }
  return (
    <tr
      className="Issue"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={style}
    >
      <td style={{ width: '26px' }} className="handle">
        <FontAwesomeIcon icon="bars" />
      </td>
      <td>{title}</td>
      <td style={{ width: '106px' }}>{moment(created_at).fromNow()}</td>
      <td style={{ width: '106px' }}>{moment(updated_at).fromNow()}</td>
      <td style={{ width: '44px' }} className="avatar">
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
