import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import apiKey from '../state/slices/apiKey'
import repos from '../ui/screens/LoggedIn/Repos/reposSlice'
import issues from '../ui/screens/LoggedIn/Repo/Issues/state/issuesSlice'
import priorities from '../ui/screens/LoggedIn/Repo/Issues/state/prioritiesSlice'
import { clearState, loadState, storeState } from './localStorage'

const preloadedState = loadState() || {}
const store = configureStore({
  preloadedState,
  reducer: {
    counter,
    apiKey,
    repos,
    issues,
    priorities,
  },
})

store.subscribe(() => {
  // would be worthwhile in a production app to throttle this,
  // or only trigger it on changes to a specific set of keys
  storeState(store.getState())
})

export const destroySession = () => {
  clearState()
}
export default store
