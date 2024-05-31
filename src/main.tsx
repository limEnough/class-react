import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// JS 방식
// ReactDOM.createRoot(document.getElementById('root')!).render(React.createElement(App))

// JSX 방식
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
