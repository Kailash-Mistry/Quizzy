import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoginNav } from './loginNav'
import { LoginSec } from './loginSection'

export function Login(){
    return(
        <>
          <LoginNav/>
          <LoginSec/>
        </>
    )
}
