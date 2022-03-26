import React from 'react'

export const Input = (props) => {
  return (
    <input
      className="
        w-full text-gray-800 leading-normal drop-shadow focus:outline-none focus:ring-0 focus:text-gray-800 h-10"
      {...props}
    />
  )
}
