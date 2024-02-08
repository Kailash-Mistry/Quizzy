export function QuestionCard(){
    return(
        <>
            <div className="bg-violet-400 flex justify-center items-center h-screen">
                <div className='bg-white rounded-lg min-w-[35%]'>
                    <div className="p-6">
                        <div>
                            <h1 className='font-semibold text-2xl'>Quizzy</h1>
                            <hr className='h-0.5 my-2 border-1 bg-black'/>
                            <p>1.First page of website is termed as ?</p>
                        </div>
                        <div className="grid mt-4">
                            <button className="flex justify-start border-[1px] border-black rounded-lg p-3 m-2">Index Page</button>
                            <button className="flex justify-start border-[1px] border-black rounded-lg p-3 m-2">Home Page</button>
                            <button className="flex justify-start border-[1px] border-black rounded-lg p-3 m-2">Site Map</button>
                            <button className="flex justify-start border-[1px] border-black rounded-lg p-3 m-2">PenDrive</button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className='bg-violet-900 py-2 px-14 text-white rounded-lg'>Next</button>
                        </div>
                        <div className="flex justify-center mt-2">
                            <p className="text-sm">3 of 5 questions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}