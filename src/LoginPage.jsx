import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoginNav } from './Navbar'
import { LoginSec } from './loginSection'

ReactDOM.createRoot(document.getElementById('log')).render(
  <React.StrictMode>
    <>
      <LoginNav/>
      <LoginSec/>
    </>
  </React.StrictMode>,
)
