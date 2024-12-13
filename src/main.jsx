import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './part1/1.1.jsx'
import App2 from './part1/1.2.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
)