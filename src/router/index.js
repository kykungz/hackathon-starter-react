import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import DemoRedux from '../demo/DemoRedux'
import DemoRouteComponent from '../demo/DemoRouteComponent'

const router = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/redux',
    component: DemoRedux
  },
  {
    path: '/route-component/:number', // URL params
    component: DemoRouteComponent
  }
]

export default router.map((route, i) => <Route key={i} {...route} />)
