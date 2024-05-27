import React from 'react'

export default function Bai5() {
  return (
    <div>
        <h1>Bài 5</h1>
        <div className='relative w-[555px] h-[310px] bg-blue-200 rounded-lg' >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 h-[250px] w-[500px] m-auto">
            <p className='text-2xl px-8 py-8'>Relative parent</p>
            <div className="absolute bottom-0 left-0">
                <button className='text-white bg-blue-500 font-bold h-[55px] w-[150px] rounded-lg'>Absolute child</button>
            </div>
            </div>
        </div>
    </div>
  )
}
