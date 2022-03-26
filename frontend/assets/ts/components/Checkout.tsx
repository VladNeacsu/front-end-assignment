import React from 'react'
import { Input } from '../ui/Input'

export const Checkout = () => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex">
        <div className="flex-1 pr-4">
          <Input />
        </div>
        <div className="flex-1">
          <Input />
        </div>
      </div>
    </div>
  )
}
