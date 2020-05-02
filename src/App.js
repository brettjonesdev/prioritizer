import React from 'react'
import EnterApiKey from './ui/screens/EnterApiKey'
import './App.scss'
import './styles/index.scss'
import { selectApiKey } from './ui/screens/EnterApiKey/state'
import { useSelector } from 'react-redux'
import LoggedIn from './ui/screens/LoggedIn'
import AppHeader from './ui/components/AppHeader'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  const apiKey = useSelector(selectApiKey)

  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div className="content">{apiKey ? <LoggedIn /> : <EnterApiKey />}</div>
      </Router>
    </div>
  )
}

export default App
