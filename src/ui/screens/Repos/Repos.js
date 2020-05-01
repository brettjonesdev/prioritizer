import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApiKey } from '../../../state/slices/apiKey'
import { fetchRepos, selectRepos } from './reposSlice'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import RepoItem from './RepoItem'
import './Repos.scss'

const Repos = () => {
  const apiKey = useSelector(selectApiKey)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRepos({ accessToken: apiKey }))
  }, [apiKey, dispatch])
  const { data, loading, error } = useSelector(selectRepos)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message="Unable to load repos" />
  }
  return (
    <div className="Repos">
      <h2>Repos</h2>
      <ul>
        {data.map((repo, index) => (
          <RepoItem key={index} {...repo} />
        ))}
      </ul>
    </div>
  )
}

export default Repos
