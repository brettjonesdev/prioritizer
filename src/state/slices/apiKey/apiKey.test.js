import apiKeyReducer, { setApiKey } from './apiKey'

describe('apiKey slice tests', () => {
  const initialState = apiKeyReducer(undefined, {})
  it('selectApiKey should be null', () => {
    expect(initialState).toBe(null)
  })
  it('should store an Api Key', () => {
    const apiKey = 'abc123xyz'
    const state = apiKeyReducer(initialState, setApiKey(apiKey))
    expect(state).toBe(apiKey)
  })
})
