import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './assets/logo.svg'

import DemoRouterLink from './components/DemoRouterLink'
import DemoRedux from './components/DemoRedux'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <DemoRouterLink />

          <Route exact path='/' component={() => <h1>Home</h1>} />
          <Route exact path='/redux' component={DemoRedux} />
          <Route path='/hello' component={() => <h1>Hello World!</h1>} />
        </div>
      </Router>
    )
  }
}

export default App
