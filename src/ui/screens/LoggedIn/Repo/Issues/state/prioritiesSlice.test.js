import prioritiesReduce, {
  storePriorities,
  updateWithIssues,
} from './prioritiesSlice'

describe('apiKey slice tests', () => {
  const initialState = prioritiesReduce(undefined, {})
  it('initial state should be an empty repo object', () => {
    expect(initialState).toEqual({ repos: {} })
  })

  it('should store an array of issue ids', () => {
    const expected = {
      repos: {
        foo: [1, 2, 3],
      },
    }
    expect(
      prioritiesReduce(
        initialState,
        storePriorities({ repo: 'foo', issueIds: [1, 2, 3] })
      )
    ).toEqual(expected)
    expect(expected.repos.foo).toEqual([1, 2, 3])
  })

  it('should remove old issues and append new issues to end of priorities array', () => {
    const repo = 'my-repo-name'
    const initialIssueRanking = [2, 3, 1]
    // This represents a list of all Issues coming back from GH.
    // 2 is gone, 4 has been added
    const newIssueIdList = [1, 3, 4]
    const startState = {
      repos: {
        123: [1, 2, 3],
        [repo]: initialIssueRanking,
      },
    }
    const result = prioritiesReduce(
      startState,
      updateWithIssues({ repo, issueIds: newIssueIdList })
    )
    expect(result.repos).toEqual({ 123: [1, 2, 3], [repo]: [3, 1, 4] })
  })
})
