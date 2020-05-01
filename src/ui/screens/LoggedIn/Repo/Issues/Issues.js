import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApiKey } from '../../../../../state/slices/apiKey'
import Loading from '../../../../components/Loading'
import Error from '../../../../components/Error'
import Issue from './Issue'
import { clearIssues, fetchIssues, selectIssues } from './issuesSlice'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

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

  const onDragEnd = useCallback((...args) => {
    console.log('drg end', ...args)
  }, [])

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
              {data.map((issue, index) => (
                <Draggable
                  key={issue.id}
                  draggableId={'' + issue.id}
                  index={index}
                >
                  {(draggableProvided) => (
                    <React.Fragment>
                      <Issue
                        key={index}
                        {...issue}
                        provided={draggableProvided}
                      />
                      {/* Drop zones are on top of existing items, so we need one more
                  			placeholder at the bottom, as there's no item there */}
                      {draggableProvided.placeholder}
                    </React.Fragment>
                  )}
                </Draggable>
              ))}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  )
}

export default Issues
