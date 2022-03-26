import React from 'react'
import { routesConfig } from '../lib/routes'
import { useTinyRouter } from '../lib/TinyRouter'

export const Header = () => {
  const { currentRoute } = useTinyRouter()

  return (
    <nav className="main-nav">
      {routesConfig.map((route) => (
        <a
          key={route.path}
          href={route.path}
          className={`${currentRoute === route.path ? 'active' : ''}`}
        >
          {route.name}
        </a>
      ))}
    </nav>
  )
}
