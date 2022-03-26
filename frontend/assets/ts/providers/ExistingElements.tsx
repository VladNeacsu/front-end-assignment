import React from 'react'

const ExistingElementsContext = React.createContext('')

export const ExistingElementsProvider = ({ children, existingElements }) => {
  return (
    <ExistingElementsContext.Provider value={existingElements}>
      {children}
    </ExistingElementsContext.Provider>
  )
}

export const useExistingElements = () =>
  React.useContext(ExistingElementsContext)
