import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApiKey } from '../../../../state/slices/apiKey'
import { fetchRepos, selectRepos } from './reposSlice'
import Loading from '../../../components/Loading'
import Error from '../../../components/Error'
import RepoItem from './RepoItem'
import './Repos.scss'

const Repos = ({ currentRepoName }) => {
  const apiKey = useSelector(selectApiKey)
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(selectRepos)
  useEffect(() => {
    if (!data) {
      dispatch(fetchRepos({ accessToken: apiKey }))
    }
  }, [apiKey, data, dispatch])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message="Unable to load repos" />
  }
  return (
    <div className="Repos">
      <ul>
        {data.map((repo, index) => (
          <RepoItem
            current={repo.name === currentRepoName}
            key={index}
            {...repo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Repos
