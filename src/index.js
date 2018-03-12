import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'

injectGlobal`
  .App-logo {
    width: 100px;
    background: #2d2d2d;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
