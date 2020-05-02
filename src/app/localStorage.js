import { selectApiKey } from '../ui/screens/EnterApiKey/state'
import { selectPriorities } from '../ui/screens/LoggedIn/Repo/Issues/state/prioritiesSlice'

const LOCAL_STORAGE_KEY = 'prioritizer-api-key'
export const loadState = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
export const storeState = (state) =>
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(getLocallyPersistedState(state))
  )
export const clearState = () => localStorage.removeItem(LOCAL_STORAGE_KEY)

export const getLocallyPersistedState = (state) => {
  const apiKey = selectApiKey(state)
  const priorities = selectPriorities(state)
  return {
    apiKey,
    priorities,
  }
}
