import React from 'react'
import { routesConfig } from './routes'

export const TinyRouter = () => {
  const currentRoute = window.location.pathname

  for (const route of routesConfig) {
    if (currentRoute === route.path) {
      return route.component
    }
  }

  return (
    <div className="font-bold text-lg text-center mt-10">404 Not Found</div>
  )
}

export const useTinyRouter = () => {
  const currentRoute = window.location.pathname

  return {
    currentRoute,
    currentRouteConfig: routesConfig[currentRoute],
  }
}
