import { createSlice } from '@reduxjs/toolkit'

const LOCAL_STORAGE_KEY = 'prioritizer-api-key'
export const getLocal = () => localStorage.getItem(LOCAL_STORAGE_KEY)
export const setLocal = (apiKey) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, apiKey)
export const clearLocal = () => localStorage.removeItem(LOCAL_STORAGE_KEY)

const initialState = null
/**
 * The apiKey slice simply stores a GH Api Key and remembers it,
 * @type {Slice<unknown, {setApiKey: (function(*, *): any), unsetApiKey: (function(*): *)}, string>}
 */
export const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setApiKey: (state, action = {}) => action.payload,
    unsetApiKey: () => initialState,
  },
})

export const { setApiKey, unsetApiKey } = apiKeySlice.actions

export const storeApiKey = (apiKey) => {
  getLocal(apiKey)
  return setApiKey(apiKey)
}
export const clearApiKey = () => {
  clearLocal()
  return unsetApiKey()
}
export const selectApiKey = (state) => state.apiKey

export default apiKeySlice.reducer
