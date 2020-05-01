import React from 'react'
import EnterApiKey from './ui/screens/EnterApiKey'
import './App.scss'
import './styles/index.scss'
import { selectApiKey } from './state/slices/apiKey'
import { useSelector } from 'react-redux'
import LoggedIn from './ui/screens/LoggedIn'
import AppHeader from './ui/components/AppHeader'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const apiKey = useSelector(selectApiKey)

  return (
    <div className="App">
      <Router>
        <div className="content">
          <AppHeader />
          {apiKey ? <LoggedIn /> : <EnterApiKey />}
        </div>
      </Router>
    </div>
  )
}

export default App
