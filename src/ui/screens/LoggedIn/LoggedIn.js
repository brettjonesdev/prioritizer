import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Repos from './Repos'
import Repo from './Repo'

const LoggedIn = () => {
  return (
    <Switch>
      <Route path="/" exact component={Repos} />
      <Route path="/:id" component={Repo} />
    </Switch>
  )
}

export default LoggedIn
