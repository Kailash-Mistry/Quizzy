export function Nav(){

    return(
        <>
            <div className="nav-bar flex flex-row justify-between mt-3 h-16">
                <div>

                </div>
                <div className="flex flex-row gap-3 mx-4">
                    <button className="m-2 px-4 py-1 h-11 rounded-md border-2 border-slate-300 hover:bg-slate-100 active:bg-slate-200">Enter Code</button>
                    <button className="bg-purple-600 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800">Login</button>
                    <button className="bg-purple-600 m-2 px-4 py-1 h-11 rounded-md text-white hover:bg-purple-700 active:bg-purple-800">Sign-Up</button>
                </div>
            </div>
        </>
    )
}