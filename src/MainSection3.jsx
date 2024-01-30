import React, { useState } from 'react';
import Quiz from './assets/quiz.jpg';

function ButtonColorChange({ setButtonColors }) {
  const handleButtonClick = (button) => {
    // Reset all buttons to default color
    const newButtonColors = {
      button1: "bg-gray-300",
      button2: "bg-gray-300",
      button3: "bg-gray-300",
    };

    // Set the clicked button to purple
    newButtonColors[button] = "bg-purple-600";

    // Update the state with the new button colors
    setButtonColors(newButtonColors);
  };

  return (
    <div className="bg-slate-200 sticky top-20 h-12 flex justify-evenly items-center mx-40 my-10 rounded-xl">
      <button onClick={() => handleButtonClick('button1')} className={`px-4 py-3 rounded-xl w-full text-center ${setButtonColors.button1}`}>
        <a href="#section-1">Create & Customize</a>
      </button>
      <button onClick={() => handleButtonClick('button2')} className={`px-4 py-3 rounded-xl w-full text-center ${setButtonColors.button2}`}>
        <a href="#section-2">Include & Engage</a>
      </button>
      <button onClick={() => handleButtonClick('button3')} className={`px-4 py-3 rounded-xl w-full text-center ${setButtonColors.button3}`}>
        <a href="#section-3">Get Data</a>
      </button>
    </div>
  );
}
  

export function Details(){

    const [buttonColors, setButtonColors] = useState({
        button1: "bg-gray-300",
        button2: "bg-gray-300",
        button3: "bg-gray-300",
      });
    

    return(
        <>
            <ButtonColorChange setButtonColors={setButtonColors} />
            <div id='section-1' className="flex justify-between bg-gray-300">
                <div className="w-full p-12 pt-52">
                    <h2 className="text-6xl mb-6 font-bold text-purple-700">Quickly find or create anything in your curriculum</h2>
                    <p className="text-xl text-gray-700 mb-4">Prepare high-quality, interactive content in as little as two minutes.</p>
                    <p className="text-3xl font-semibold">Customizable content library</p>
                    <p className='mb-4'>30M+ teacher-created activities spanning all grade levels and subjects</p>
                    <p className='text-3xl font-semibold'>Create, copy, or edit</p>
                    <p>Build from scratch, copy entire activities, or mix and match to meet students’ needs</p>
                </div>
                <div className=" w-full text-center p-12">
                    <img className="w-full" src={Quiz} alt="" />
                </div>
            </div>
            <div id='section-2' className="flex justify-between">
                <div className="w-full p-12 pt-52">
                    <h2 className="text-6xl mb-6 font-bold text-purple-700">Quickly find or create anything in your curriculum</h2>
                    <p className="text-xl text-gray-700 mb-4">Prepare high-quality, interactive content in as little as two minutes.</p>
                    <p className="text-3xl font-semibold">Customizable content library</p>
                    <p className='mb-4'>30M+ teacher-created activities spanning all grade levels and subjects</p>
                    <p className='text-3xl font-semibold'>Create, copy, or edit</p>
                    <p>Build from scratch, copy entire activities, or mix and match to meet students’ needs</p>
                </div>
                <div className=" w-full text-center p-12">
                    <img className="w-full" src={Quiz} alt="" />
                </div>
            </div>
            <div id='section-3' className="flex justify-between bg-gray-300">
                <div className="w-full p-12 pt-52">
                    <h2 className="text-6xl mb-6 font-bold text-purple-700">Quickly find or create anything in your curriculum</h2>
                    <p className="text-xl text-gray-700 mb-4">Prepare high-quality, interactive content in as little as two minutes.</p>
                    <p className="text-3xl font-semibold">Customizable content library</p>
                    <p className='mb-4'>30M+ teacher-created activities spanning all grade levels and subjects</p>
                    <p className='text-3xl font-semibold'>Create, copy, or edit</p>
                    <p>Build from scratch, copy entire activities, or mix and match to meet students’ needs</p>
                </div>
                <div className=" w-full text-center p-12">
                    <img className="w-full" src={Quiz} alt="" />
                </div>
            </div>
        </>
    )
}