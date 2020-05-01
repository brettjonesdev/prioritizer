import React from 'react'
import EnterApiKey from './ui/screens/EnterApiKey'
import './App.scss'
import './styles/index.scss'
import { selectApiKey } from './state/slices/apiKey'
import { useSelector } from 'react-redux'
import Repos from './ui/screens/Repos'

function App() {
  const apiKey = useSelector(selectApiKey)

  return (
    <div className="App">
      <div className="content">
        <h1>Prioritizer</h1>
        {apiKey ? <Repos /> : <EnterApiKey />}
      </div>
    </div>
  )
}

export default App
