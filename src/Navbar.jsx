import { Link } from "react-router-dom"

export function Nav(){

    return(
        <>
            <div className="nav-bar flex flex-row justify-between mt-3 h-16 sticky top-0 bg-white">
                <div>

                </div>
                <div className="flex flex-row gap-3 mx-4">
                    <button className="m-2 px-4 h-11 rounded-md border-2 active:scale-95 border-slate-300 hover:bg-slate-100 active:bg-slate-200 text-sm sm:text-base">Enter Code</button>
                    <Link to='login'><button className="bg-purple-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Login</button></Link>
                    <button className="bg-purple-600 active:scale-95 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 text-sm sm:text-base">Sign-Up</button>
                </div>
            </div>
        </>
    )
}