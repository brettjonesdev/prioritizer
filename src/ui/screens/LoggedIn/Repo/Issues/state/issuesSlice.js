import { createSlice } from '@reduxjs/toolkit'
import createClient from '../../../../../../app/githubClient'
import { updateWithIssues } from './prioritiesSlice'

const initialState = {
  data: null,
  loading: true,
  error: false,
}

/**
 * The issues slice stores an array of GitHub Issues for a given repository
 * @type {Slice<{data: null, loading: boolean, error: boolean}, {clearIssues: (function(*): {data: null, loading: boolean, error: boolean}), getIssuesFailure: issuesSlice.reducers.getIssuesFailure, getIssuesSuccess: issuesSlice.reducers.getIssuesSuccess}, string>}
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

/**
 * Fetch an array of GitHub Issues for a single repository
 * @param owner
 * @param repo
 * @param accessToken
 * @return {function(...[*]=)}
 */
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
