/* Stateful Component */
import React, { Component } from 'react'
import styled from 'styled-components'

class DemoComponent extends Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default DemoComponent

/* Stateless Functional Component */
import React, { Component } from 'react'
import styled from 'styled-components'

const DemoComponent = (props) => {
  return (
    <div>
    </div>
  )
}

export default DemoComponent
