import React from 'react'
import { Link } from 'react-router-dom'

const DemoRouterLink = (props) => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/redux'>Demo Redux</Link></li>
      <li><Link to='/hello'>Hello</Link></li>
    </ul>
  )
}

export default DemoRouterLink
