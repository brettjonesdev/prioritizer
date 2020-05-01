import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import apiKey from '../state/slices/apiKey'

export default configureStore({
  reducer: {
    counter,
    apiKey,
  },
})
