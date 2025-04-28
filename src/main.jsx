import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ChangeTheme } from "./components/ChangeTheme.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ChangeTheme />
  </React.StrictMode>,
)
