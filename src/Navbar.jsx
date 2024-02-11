import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Hamburger from "./assets/hamburger.png"
import Sidebar from "./Hamburger"

export function Nav(){

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      setShowMenu(!showMenu);
    }

    return(
        <>
            <div className="nav-bar flex flex-row justify-between mt-3 h-16 sticky top-0 bg-white">
                <div>

                </div>
                <div className="flex flex-row gap-3 mx-4">
                    <button className="hidden md:block m-2 px-4 h-11 rounded-md border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Enter Code</button>
                    <Link to='login'><button className="bg-purple-600 hidden md:block active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Login</button></Link>
                    <button className="bg-purple-600 active:scale-95 hidden md:block m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Sign-Up</button>
                    <div className='md:hidden '><button onClick={handleClick} className='text-white rounded-[50%]'><img className='h-[36px] w-[36px]' src={Hamburger} alt="" /></button></div>
                </div>
            </div>
            {showMenu && (
    
            <div className='flex bg-purple-800 justify-center items-center h-[90vh] w-[100vw] md:hidden'>
                <div className='flex flex-col gap-8 text-center'>
                    <div><a href=""  className='font-semibold hover:scale-110'>Home</a></div>
                    <div><a href="" className='font-semibold hover:scale-110'>For Teachers</a></div>
                    <div><a href="" className='font-semibold hover:scale-110'>For Students</a></div>
                    <div><button><a href="" className='border-[1px] border-black p-2 rounded-lg font-bold'>SignUp</a></button></div>
                </div>
            
            </div>
                )}
        </>
    )
}