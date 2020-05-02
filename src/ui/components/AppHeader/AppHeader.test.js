import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../app/store'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './AppHeader'
import { setApiKey } from '../../screens/EnterApiKey/state'

test('no logout link when there is no api key', () => {
  const { queryByText } = render(
    <Provider store={store}>
      <Router>
        <AppHeader />
      </Router>
    </Provider>
  )

  expect(queryByText(/Log out/i)).toBeNull()
})

test('logout link IS displayed when there is an api key', () => {
  store.dispatch(setApiKey('abc123'))

  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <AppHeader />
      </Router>
    </Provider>
  )

  expect(getByText(/Log out/i)).toBeInTheDocument()
})
