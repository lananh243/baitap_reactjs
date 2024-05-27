import React from 'react'

export default function Bai8() {
  return (
    <div>
        <h1>Bài 8</h1>
        
        <div className="flex justify-start gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử nằm bên trái</h1>

        <div className="flex justify-end gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử nằm bên phải</h1>

        <div className="flex justify-center gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử nằm ở giữa</h1>

        <div className="flex justify-between gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử giãn ra 2 bên</h1>

        <div className="flex justify-around gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử giãn đều ra 2 bên</h1>

        <div className="flex justify-evenly gap-6">
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>01</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>02</div>
            <div className='w-[50px] h-[50px] text-white bg-violet-600 flex justify-center items-center rounded-md'>03</div>
        </div>
        <h1 className='flex justify-center'>Các phần tử giữa đều</h1>
    </div>
  )
}
