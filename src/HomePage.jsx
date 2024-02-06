import { Nav } from './Navbar'
import { Main } from './MainSection'
import { Main2 } from './MainSection2'
import CarouselDemoAutoPlay from './carousel'
import { Details } from './MainSection3'
import { Foot } from './footer'

export function Home(){

    return(
        <>
            <Nav/>
            <Main/>
            <Main2/>
            {/* <CarouselDemoAutoPlay/> */}
            <Details/>
            <Foot/>
        </>
    )
}