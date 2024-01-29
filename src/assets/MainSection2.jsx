export function Main2(){
    return(
        <>
            <div className='flex flex-col justify-around items-center sm:h-[60vh] h-[150vh] mb-32'>
                <div className='text-center'>
                    <h2 className='text-[60px] font-bold font-serif'>Trusted by teachers in </h2>
                    <h2 className='text-6xl text-yellow-500 font-extrabold font-serif'>90% of Indian Schools</h2>
                </div>
                <div className='h-24 w-full flex justify-center gap-12 sm:flex-row flex-col'>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img className='h-32' src="./src/assets/hero1.svg" alt="nono" />
                        <h3 className='font-semibold text-xl'>Save teachers 3.5</h3>
                        <p className='font-semibold text-xl'>hrs/week</p>
                    </div>
                    <div>
                        <img className='h-32 hidden sm:block' src="./src/assets/hero_arrow.svg" alt="" />
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img className='h-32 sm:relative top-24' src="./src/assets/hero2.svg" alt="" />
                        <p className='sm:relative top-24 font-semibold text-xl'>Improve test scores by up </p>
                        <p className='sm:relative top-24 font-semibold text-xl'>to 50%</p>
                    </div>
                    <div>
                        <img className='h-32 hidden sm:block' src="./src/assets/hero_arrow2.svg" alt="" />
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img className='h-32' src="./src/assets/hero3.svg" alt="" />
                        <p className='font-semibold text-xl'>Reduce test-taking</p>
                        <p className='font-semibold text-xl'>anxiety</p>
                    </div>
                </div>
            </div>
        </>
    )
}