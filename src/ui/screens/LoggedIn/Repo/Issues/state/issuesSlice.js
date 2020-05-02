import { createSlice } from '@reduxjs/toolkit'
import createClient from '../../../../../../app/githubClient'
import { updateWithIssues } from './prioritiesSlice'

const initialState = {
  data: null,
  loading: true,
  error: false,
}

/**
 * The apiKey slice simply stores a GH Api Key and remembers it,
 * @type {Slice<unknown, {storeApiKey: (function(*, *): any), clearApiKey: (function(*): *)}, string>}
 */
export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    getIssuesSuccess: (state, action = {}) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    },
    getIssuesFailure: (state, action = {}) => {
      state.data = null
      state.loading = false
      state.error = action.payload
    },
    clearIssues: (state) => initialState,
  },
})

export const {
  getIssuesSuccess,
  getIssuesFailure,
  clearIssues,
} = issuesSlice.actions

export const fetchIssues = ({ owner, repo, accessToken }) => async (
  dispatch
) => {
  try {
    dispatch(clearIssues())
    const client = createClient({ accessToken })
    const { data } = await client.get(`/repos/${owner}/${repo}/issues`)
    const issueIds = data.map(({ id }) => id)
    dispatch(updateWithIssues({ repo, issueIds }))
    dispatch(getIssuesSuccess(data))
  } catch (error) {
    console.error(error)
    dispatch(getIssuesFailure(error.toString()))
  }
}

export const selectIssues = (state) => state.issues

export default issuesSlice.reducer
