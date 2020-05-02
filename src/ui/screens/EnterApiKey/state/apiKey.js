import { createSlice } from '@reduxjs/toolkit'

const initialState = null
/**
 * The apiKey slice simply stores a GH Personal Access Token and remembers it
 * @type {Slice<null, {setApiKey: (function(*, *=): *)}, string>}
 */
export const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setApiKey: (state, action = {}) => action.payload,
  },
})

export const { setApiKey } = apiKeySlice.actions

export const selectApiKey = (state) => state.apiKey

export default apiKeySlice.reducer
