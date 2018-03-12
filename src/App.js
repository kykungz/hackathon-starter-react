import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './assets/logo.svg'
import routerView from './router'

import DemoRouterLink from './demo/DemoRouterLink'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <DemoRouterLink />
          {routerView}
        </div>
      </Router>
    )
  }
}

export default App
