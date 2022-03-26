import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import { Main } from './components/Main'
import { ExistingElementsProvider } from './providers/ExistingElements'

/**
 * Fetching these elements and using context is a workaround for using React as a solution for the tasks.
 * We always get some elements from the server, so we save them in the context for future use.
 */
const existingDomElements = document.getElementsByTagName('main')[0].innerHTML

ReactDOM.render(
  <ExistingElementsProvider existingElements={existingDomElements}>
    <Main />
  </ExistingElementsProvider>,
  document.getElementById('root')
)
