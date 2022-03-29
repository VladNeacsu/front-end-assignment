import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-css-reset'
import './ui/styles/app.scss'
import '@fontsource/roboto'
import { Main } from './layout/Main'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
  <>
    <Main />
    <ToastContainer
      draggable={true}
      position="top-right"
      theme="dark"
      hideProgressBar={true}
    />
  </>,
  document.getElementById('react-app')
)
