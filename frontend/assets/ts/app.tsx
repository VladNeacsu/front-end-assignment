import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-css-reset'
import './ui/styles/app.scss'
import '@fontsource/roboto'
import { Main } from './components/Main'
import { ExistingElementsProvider } from './providers/ExistingElements'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

/**
 * Fetching these elements and using context is a workaround for using React as a solution for the tasks.
 * We always get some elements from the server, so we save them in the context for future use.
 */
const existingDomElements = document.getElementsByTagName('main')[0].innerHTML

ReactDOM.render(
  <ExistingElementsProvider existingElements={existingDomElements}>
    <Main />
    <ToastContainer
      draggable={true}
      position="top-right"
      theme="dark"
      hideProgressBar={true}
    />
  </ExistingElementsProvider>,
  document.getElementById('root')
)
