import React, { Component } from 'react'
import logo from './assets/logo.svg'
import DemoRedux from './components/DemoRedux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoRedux />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App
