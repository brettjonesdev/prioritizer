import { selectApiKey } from '../ui/screens/EnterApiKey/state'
import { selectPriorities } from '../ui/screens/LoggedIn/Repo/Issues/state/prioritiesSlice'

const LOCAL_STORAGE_KEY = 'prioritizer-local-storage-key'

export const loadState = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

export const storeState = (state) =>
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(getLocallyPersistedState(state))
  )
export const clearState = () => localStorage.removeItem(LOCAL_STORAGE_KEY)

/**
 * Select a portion of the Redux state that we would like to sync to Local Storage
 * @param state
 * @return {{priorities, apiKey}}
 */
export const getLocallyPersistedState = (state) => {
  const apiKey = selectApiKey(state)
  const priorities = selectPriorities(state)
  return {
    apiKey,
    priorities,
  }
}
