import React, { useCallback, useState } from 'react'
import { setApiKey as storeApiKey } from './state'
import { useDispatch } from 'react-redux'
import './EnterApiKey.scss'

/**
 * EnterApiKey is a pseudo-login page where users can paste a valid GitHub Personal Api Key/Access Token
 * @return {*}
 * @constructor
 */
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
    <form className="EnterApiKey" onSubmit={onSubmit}>
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
    </form>
  )
}

export default EnterApiKey
