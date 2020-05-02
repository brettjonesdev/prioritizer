import React, { useCallback, useState } from 'react'
import { setApiKey as storeApiKey } from './state'
import { useDispatch } from 'react-redux'
import './EnterApiKey.scss'

const EnterApiKey = () => {
  const dispatch = useDispatch()
  const [apiKey, setApiKey] = useState('')
  const onChange = useCallback((e) => {
    setApiKey(e.target.value)
  }, [])
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      dispatch(storeApiKey(apiKey))
    },
    [apiKey, dispatch]
  )
  return (
    <form onSubmit={onSubmit}>
      <div className="EnterApiKey">
        <div>
          <label htmlFor="apiKey">
            Enter a valid GitHub Personal Access Token
          </label>
        </div>
        <div className="flex-row">
          <input
            id="apiKey"
            className="api-key"
            type="text"
            value={apiKey}
            onChange={onChange}
          />
          <input
            className="submit-button primary"
            type="submit"
            value="Submit"
            disabled={!apiKey}
          />
        </div>
      </div>
    </form>
  )
}

export default EnterApiKey
