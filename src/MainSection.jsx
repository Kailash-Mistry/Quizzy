import './App.css'

export function Main(){
    
    return(
        <>
            <div className="w-full h-[90vh] flex flex-col justify-center items-center flex-wrap main-sec">
                <div className="mb-7 text-center">
                    <h2 className="sm:text-8xl sm:font-bold font-semibold text-6xl">It matters <span className="text-purple-600">how you ask</span></h2>
                </div>
                <div className="mb-7 text-center">
                    <p className="text-xl font-medium">Assessment, instruction, and practice that motivate every student .</p>
                </div>
                <div>
                    <button className="bg-purple-600 px-3 py-1 rounded-md text-white hover:bg-purple-700 active:bg-purple-800 border-b-purple-900 border-b-4 hover:"><p>Teachers</p>Sign up for free</button>
                </div>
            </div>

        </>
    )
}