import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Repo from './Repo'
import ReposPage from './ReposPage'

const LoggedIn = () => {
  return (
    <Switch>
      <Route path="/" exact component={ReposPage} />
      <Route path="/:owner/:repo" component={Repo} />
    </Switch>
  )
}

export default LoggedIn
