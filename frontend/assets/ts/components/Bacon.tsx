import React, { useState } from 'react'

export const Bacon = () => {
  const sourceOfBacon = 'images/bacon.jpg'
  const [baconArray, setBaconArray] = useState<BaconElement[]>([])

  const addSomeRandomBacon = () => {
    const newBacon = {
      id: Math.random(),
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(100, window.innerHeight), // We don't want the bacon to appear on the navbar
      size: randomBetween(100, 200),
    }
    setBaconArray((baconArray) => [...baconArray, newBacon])
  }

  return (
    <>
      <div className="bacon-component">
        <button className="btn primary" onClick={addSomeRandomBacon}>
          Yeah, I want more bacon!
        </button>
        <img
          src={sourceOfBacon}
          alt="Beautiful slices of fried bacon Archetype"
          width={300}
        />
      </div>

      {baconArray.map((bacon) => (
        <div
          key={bacon.id}
          style={{
            position: 'absolute',
            left: `${bacon.x}px`,
            top: `${bacon.y}px`,
            width: `${bacon.size}px`,
            height: `${bacon.size}px`,
          }}
        >
          <img
            src={sourceOfBacon}
            className="bacon-image"
            alt="Beautiful slices of fried bacon"
          />
        </div>
      ))}
    </>
  )
}

const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

interface BaconElement {
  id: number
  x: number
  y: number
  size: number
}
