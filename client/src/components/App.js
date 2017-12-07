import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Avalon from './avalon'

const App = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <Avalon />
    </HashRouter>
  </Provider>
)

export default App
