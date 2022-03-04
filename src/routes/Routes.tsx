import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PublicRoute from './PubliceRoute'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))

//attribute -  path : string - exact: boolean - route : component (wich router component will render the att component)
//at end, put the route in array "routes"

//root
const LoginRedirect = () => <Redirect to="/dashboard" />

const root = {
  path: '/',
  component: LoginRedirect,
  exact: true,
  route: Route
}

//dashboard
const dashboard = {
  path: '/dashboard',
  component: Dashboard,
  exact: false,
  route: PublicRoute
}

const routes = [root, dashboard]

export default routes
