import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  repos: {},
}

/**
 * The prioritiesSlice tracks arrays of issue ids representing their priority
 * @type {Slice<{repos: {}}, {updateWithIssues: prioritiesSlice.reducers.updateWithIssues, storePriorities: prioritiesSlice.reducers.storePriorities}, string>}
 */
export const prioritiesSlice = createSlice({
  name: 'priorities',
  initialState,
  reducers: {
    /**
     * Store an array of issue ids representing their priority
     * @param state
     * @param action
     */
    storePriorities: (state, action = {}) => {
      const { repo, issueIds } = action.payload
      state.repos[repo] = issueIds
    },
    /**
     * When a list of Issues is fetched for a repo,
     * check those Issue Ids against our existing saved issue id priorities.
     * If there are new Issues, append them. If there are
     */
    updateWithIssues: (state, action = {}) => {
      const { repo, issueIds } = action.payload
      const oldIssueIds = state.repos[repo] || []
      // Filter out any issue ids for issues that are no longer present
      const existingIssueIds = oldIssueIds.filter((id) => issueIds.includes(id))
      // Find any new issues from GH, add them to the end
      const newIssues = issueIds.filter((id) => !oldIssueIds.includes(id))
      state.repos[repo] = [...existingIssueIds, ...newIssues]
    },
  },
})

export const { storePriorities, updateWithIssues } = prioritiesSlice.actions

export const selectPriorities = (state) => state.priorities

export default prioritiesSlice.reducer
