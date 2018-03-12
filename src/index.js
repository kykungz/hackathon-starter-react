import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
// import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  .App-logo {
    width: 100px;
    background: #2d2d2d;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
