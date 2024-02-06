export function Quizcodepage() {
    return (
        <>
      <nav class="bg-purple-950 h-auto flex justify-between items-center">
          <p className="text-white">LOGO</p>
          <button className="text-lg font-semibold text-white bg-violet-50 bg-opacity-30 px-3 py-1 m-2.5 rounded-sm">Kailash's Dashboard</button>
      </nav>
      <div className='mt-36'>
        <div className='flex justify-center text-white'>
          <h1 className='text-6xl font-bold'>Quizzy</h1>
        </div>
        <div className='mt-10'>
          <div className='grid col-span-2 md:flex justify-center'>
            <input type='text' placeholder='Enter a join code' className='text-2xl p-4 rounded-lg max-h-20 md:relative md:left-10'></input>
            <button className='bg-purple-800 text-xl p-3 rounded-lg shadow-xl text-white font-bold mt-2 md:m-2 md:relative md:right-10'>Join</button>
          </div>
        </div>
      </div>
    </>
    )
}