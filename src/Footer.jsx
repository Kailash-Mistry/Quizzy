import Twitter from './assets/twitter.png'
import Facebook from './assets/facebook.png'
import Insta from './assets/Insta.png'

export function Foot(){

    return (
        <>
            <div className="h-96 flex p-10 justify-center gap-24 bg-gray-200 items-center pl-64">
                <div className="flex flex-col h-full gap-10 text-[15px] font-medium">
                    <p>The Quizzy Blog</p>
                    <p>Teacher Resources</p>
                    <p>Help Centre</p>
                    <p>SiteMap</p>
                    <p>Terms of Service</p>
                </div>
                <div className="flex flex-col h-full gap-10 text-[15px] font-medium">
                    <p>Worksheet</p>
                    <p>Privacy Policy</p>
                    <p>Privacy Centre</p>
                    <p>Career</p>
                    <p>About Us</p>
                </div>
                <div className='flex h-8 w-[300px] justify-end gap-10'>
                    <div><img src={Twitter} alt="" /></div>
                    <div><img src={Insta} alt="" /></div>
                    <div><img src={Facebook} alt="" /></div>
                </div>
            </div>
        </>
    )
}