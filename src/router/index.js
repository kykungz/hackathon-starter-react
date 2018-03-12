import React from 'react'
import { Route } from 'react-router-dom'

import DemoRedux from '../components/DemoRedux'
import DemoRouteComponent from '../components/DemoRouteComponent'

const router = [
  {
    path: '/',
    exact: true,
    component: () => (
      <h1><i className="fa fa-home" aria-hidden="true"></i> Home</h1>
    )
  },
  {
    path: '/redux',
    component: DemoRedux
  },
  {
    path: '/route-component/:number',
    component: DemoRouteComponent
  }
]

export default router.map((route, i) => <Route key={i} {...route} />)
