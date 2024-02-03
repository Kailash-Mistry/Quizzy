import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Nav } from './Navbar'
import { Main } from './MainSection'
import { Main2 } from './MainSection2'
import CarouselDemoAutoPlay from './carousel'
import { Details } from './MainSection3'
import { Foot } from './footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Nav/>
      <Main/>
      <Main2/>
      {/* <CarouselDemoAutoPlay/> */}
      <Details/>
      <Foot/>
    </>
  </React.StrictMode>,
)
