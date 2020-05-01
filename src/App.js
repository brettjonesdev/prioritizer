import React from 'react'
import EnterApiKey from './screens/EnterApiKey'
import './App.scss'
import './styles/index.scss'
import { selectApiKey } from './state/slices/apiKey'
import { useSelector } from 'react-redux'

function App() {
  const apiKey = useSelector(selectApiKey)
  console.log(apiKey)

  return (
    <div className="App">
      <div className="content">
        <h1>Prioritizer</h1>
        {apiKey ? <h1>Api Key: ${apiKey}</h1> : <EnterApiKey />}
      </div>
    </div>
  )
}

export default App
