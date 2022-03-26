import React from 'react'
import { routesConfig } from '../lib/routes'
import { useTinyRouter } from '../lib/TinyRouter'

export const Header = () => {
  const { currentRoute } = useTinyRouter()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {routesConfig.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                currentRoute === route.path ? 'text-white font-bold' : ''
              }`}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
