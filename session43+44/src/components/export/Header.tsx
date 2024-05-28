import React from 'react'

export default function Heder() {
  return (
    <div>
        <div className="w-[100%] flex bg-black text-white justify-between items-center h-14 px-6">
            <div className="flex text-left items-center gap-3">
                <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white"> home </span>
                Home
                </span>
                <span className="flex items-center gap-2">
                <span className="material-symbols-outlined"> list </span>
                Contents
                </span>
                <span className="flex items-center gap-2">
                <span className="material-symbols-outlined"> segment </span>
                Categories
                </span>
                <span className="flex items-center gap-2">
                <span className="material-symbols-outlined"> settings </span>
                Settings
                </span>
            </div>
            <div className="text-right flex items-center gap-2 bg-white border-solid border-2 border-black-600 text-black rounded-full">
                <span className="material-symbols-outlined"> account_circle </span>
                <button>Admin</button>
            </div>
        </div>
    </div>
  )
}
