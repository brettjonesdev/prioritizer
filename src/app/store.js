import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import apiKey, { getLocal } from '../state/slices/apiKey'
import repos from '../ui/screens/Repos/reposSlice'

export default configureStore({
  preloadedState: {
    apiKey: getLocal(),
  },
  reducer: {
    counter,
    apiKey,
    repos,
  },
})
