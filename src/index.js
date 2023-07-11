import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import { BrowserRouter } from 'react-router-dom'
import { NavigationProvider } from './context/navigation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>,
)

