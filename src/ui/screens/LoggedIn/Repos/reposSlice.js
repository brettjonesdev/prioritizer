import { createSlice } from '@reduxjs/toolkit'
import createClient from '../../../../app/githubClient'

const initialState = {
  data: null,
  loading: true,
  error: false,
}
/**
 * The repos slice stores an array of GitHub Repos
 * @type {Slice<{data: null, loading: boolean, error: boolean}, {getReposSuccess: reposSlice.reducers.getReposSuccess, getReposFailure: reposSlice.reducers.getReposFailure}, string>}
 */
export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    getReposSuccess: (state, action = {}) => {
      state.data = action.payload
      state.loading = false
      state.error = false
    },
    getReposFailure: (state, action = {}) => {
      state.data = null
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getReposSuccess, getReposFailure } = reposSlice.actions

/**
 * Fetch an array of Repos from GitHub and store them in the reposSlice
 * @param accessToken
 * @return {function(...[*]=)}
 */
export const fetchRepos = ({ accessToken }) => async (dispatch) => {
  try {
    const client = createClient({ accessToken })
    const { data } = await client.get('/user/repos')
    dispatch(getReposSuccess(data))
  } catch (error) {
    console.error(error)
    dispatch(getReposFailure(error.toString()))
  }
}

export const selectRepos = (state) => state.repos

export default reposSlice.reducer
