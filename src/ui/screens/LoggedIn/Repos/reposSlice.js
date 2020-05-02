import { createSlice } from '@reduxjs/toolkit'
import createClient from '../../../../app/githubClient'

const initialState = {
  data: null,
  loading: true,
  error: false,
}
/**
 * The apiKey slice simply stores a GH Api Key and remembers it,
 * @type {Slice<unknown, {storeApiKey: (function(*, *): any), clearApiKey: (function(*): *)}, string>}
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
