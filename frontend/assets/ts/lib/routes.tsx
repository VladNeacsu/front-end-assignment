import React from 'react'
import { Bacon, Checkout } from '../components'

export enum RoutePaths {
  Home = '/',
  Bacon = '/bacon',
  Checkout = '/checkout',
}

interface Route {
  path: string
  name: string
  component: JSX.Element
}

export const routesConfig: Route[] = [
  {
    path: RoutePaths.Home,
    name: 'Home',
    component: <div className="p-3">Welcome!</div>,
  },
  { path: RoutePaths.Bacon, component: <Bacon />, name: 'Bacon!' },
  {
    path: RoutePaths.Checkout,
    component: <Checkout />,
    name: 'Checkout',
  },
]
