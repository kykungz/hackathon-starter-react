import React, { Component } from 'react'
import styled from 'styled-components'

const DemoRouteComponent = (props) => {
  return (
    <h2>
      Demo Route Component <br />
      (param = <span className="badge badge-primary">{ props.match.params.number }</span>)
    </h2>
  )
}

export default DemoRouteComponent
