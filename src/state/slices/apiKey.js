import { createSlice } from '@reduxjs/toolkit'

const initialState = null
/**
 * The apiKey slice simply stores a GH Api Key and remembers it,
 * @type {Slice<unknown, {storeApiKey: (function(*, *): any), clearApiKey: (function(*): *)}, string>}
 */
export const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    storeApiKey: (state, action) => {
      console.log(action)
      return action.payload
    },
    clearApiKey: () => initialState,
  },
})

export const { storeApiKey, clearApiKey } = apiKeySlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectApiKey = (state) => state.apiKey

export default apiKeySlice.reducer
