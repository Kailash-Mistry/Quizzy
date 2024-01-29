import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Nav } from './Navbar'
import { Main } from './MainSection'
import { Main2 } from './assets/MainSection2'
import CarouselDemoAutoPlay from './carousel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Nav/>
      <Main/>
      <Main2/>
      <CarouselDemoAutoPlay/>
    </>
  </React.StrictMode>,
)
