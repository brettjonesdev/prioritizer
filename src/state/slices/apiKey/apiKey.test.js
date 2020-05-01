import apiKeyReducer, { storeApiKey, clearApiKey } from './apiKey'

describe('apiKey slice tests', () => {
  const initialState = apiKeyReducer(undefined, {})
  it('selectApiKey should be null', () => {
    expect(initialState).toBe(null)
  })
  it('should store an Api Key', () => {
    const apiKey = 'abc123xyz'
    const state = apiKeyReducer(initialState, storeApiKey(apiKey))
    expect(state).toBe(apiKey)
  })

  it('should clear the Api Key', () => {
    const apiKey = 'abc123xyz'
    const state = apiKeyReducer(initialState, storeApiKey(apiKey))
    expect(state).toBe(apiKey)
    const result = apiKeyReducer(initialState, clearApiKey())
    expect(result).toBe(null)
  })
})
