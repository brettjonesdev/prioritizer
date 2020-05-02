import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApiKey } from '../../../EnterApiKey/state'
import Loading from '../../../../components/Loading'
import Error from '../../../../components/Error'
import Issue from './Issue'
import { clearIssues, fetchIssues, selectIssues } from './state/issuesSlice'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { selectPriorities, storePriorities } from './state/prioritiesSlice'

function arrayMove(array, fromIndex, toIndex) {
  const copy = [...array]
  const element = copy[fromIndex]
  copy.splice(fromIndex, 1)
  copy.splice(toIndex, 0, element)
  return copy
}

const Issues = ({ repo, owner }) => {
  const apiKey = useSelector(selectApiKey)
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(selectIssues) || {}
  useEffect(() => {
    dispatch(clearIssues())
  }, [dispatch, repo])

  useEffect(() => {
    if (!data) {
      dispatch(fetchIssues({ owner, repo, accessToken: apiKey }))
    }
  }, [apiKey, data, dispatch, owner, repo])

  const issueIds = useSelector(selectPriorities).repos[repo] || []

  const onDragEnd = useCallback(
    ({ source, destination }) => {
      if (!destination) return
      const newOrder = arrayMove(issueIds, source.index, destination.index)
      dispatch(storePriorities({ repo, issueIds: newOrder }))
    },
    [dispatch, issueIds, repo]
  )
  const sortedIssues = issueIds
    .map((id) => (data ? data.find((issue) => issue.id === id) : false))
    .filter((issue) => !!issue)

  if (loading) {
    return <Loading />
  }
  if (error || !data) {
    return <Error message="Unable to load Issues" />
  }

  return (
    <table className="Issues">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Created</th>
          <th>Updated</th>
          <th></th>
        </tr>
      </thead>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(droppableProvided) => (
            <tbody
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {sortedIssues.map((issue, index) => (
                <Draggable
                  key={issue.id}
                  draggableId={'' + issue.id}
                  index={index}
                >
                  {(draggableProvided, snapshot) => (
                    <Issue
                      key={index}
                      {...issue}
                      provided={draggableProvided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  )
}

export default Issues
