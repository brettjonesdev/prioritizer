import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import apiKey, { getLocal } from '../state/slices/apiKey'
import repos from '../ui/screens/LoggedIn/Repos/reposSlice'
import issues from '../ui/screens/LoggedIn/Repo/Issues/issuesSlice'

export default configureStore({
  preloadedState: {
    apiKey: getLocal(),
  },
  reducer: {
    counter,
    apiKey,
    repos,
    issues,
  },
})
