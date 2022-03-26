import React from 'react'
import { Bacon } from '../components'
import { Checkout } from '../components/Checkout'

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
    component: <div>Home</div>,
  },
  { path: RoutePaths.Bacon, component: <Bacon />, name: 'Bacon!' },
  {
    path: RoutePaths.Checkout,
    component: <Checkout />,
    name: 'Checkout',
  },
]
