import React from 'react'

export default function Menu() {
  return (
    <div>
        <div className="w-[300px] h-[1000px] bg-black px-10 py-8">
          <button className="text-black bg-white flex items-center gap-3 border-solid border-2 border-black-600 w-[200px] h-[35px] rounded-lg">
            <span className="material-symbols-outlined"> add </span>
            New Item
          </button>
          <br />
          <div className="w-[200px] bg-black text-white">
            <div className="flex items-center justify-between py-2 bg-black">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Dashboard</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <ul className="bg-black px-16">
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Commarce</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Analytics</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Cyrpto</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Helpdesk</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Monitoring</li>
              <li className=" py-1 hover:bg-gray-800 cursor-pointer">Fitnes</li>
            </ul>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Application</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Elements</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center justify-between py-2 bg-black">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Forms</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Plugins</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Elements</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Datagrid</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <br />
            <div className="flex items-center py-2 bg-black justify-between">
              <span className="material-symbols-outlined">view_cozy</span>
              <span>Settings</span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </div>
          </div>
        </div>
    </div>
  )
}
