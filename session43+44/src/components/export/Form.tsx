import React from 'react'

export default function Form() {
  return (
        <div className="bg-white p-3 rounded shadow w-[100%] ">
            <h2 className="text-xl font-bold mb-3">Form title</h2>
            <p>Senectus malesuada suspendisse bibendum elit amet vitae</p><br />
            <div className="flex w-[100%] h-[35px] border-2 border-red-600 rounded items-center">
                <span className="material-symbols-outlined px-2 text-red-600"> error </span>
                <span className="w-[100%] text-red-600">Senectus maiesuada suspendisse bibedum elit amet vitae</span>
            </div>
            <br />
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Table Title</th>
                    <th className="px-4 py-2 text-left">Table Title</th>
                    <th className="px-4 py-2 text-left">Table Title</th>
                    <th className="px-4 py-2 text-left">Table Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="px-4 py-2">Litiam purus in</td>
                    <td className="px-4 py-2">Curabitur donec duis</td>
                    <td className="px-4 py-2">Marbi pharetra, accumsan</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Duis eget habitant</td>
                    <td className="px-4 py-2">At amet adio</td>
                    <td className="px-4 py-2">Commodo eget scelerisque</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Aliquam velit lacus</td>
                    <td className="px-4 py-2">Pellentesque egetstas placerant</td>
                    <td className="px-4 py-2">Tortor habitant sit</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Fermentum sceierisque ultricies</td>
                    <td className="px-4 py-2">Morbi sagittis nulla</td>
                    <td className="px-4 py-2">Quam semper quis</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Integer semper pellentesque</td>
                    <td className="px-4 py-2">Neque turpis enim</td>
                    <td className="px-4 py-2">Egestas non sociis</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Parturient at id</td>
                    <td className="px-4 py-2">Sem neque, mattis</td>
                    <td className="px-4 py-2">Pellentesque facilisis massa</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Amet, pretium eget</td>
                    <td className="px-4 py-2">In ispum volutpat</td>
                    <td className="px-4 py-2">Ut feugiat egestas</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Risus consequat sollicitudin</td>
                    <td className="px-4 py-2">Adipiscing adio nulla</td>
                    <td className="px-4 py-2">Pharetra id sit</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 py-2">Risus consequat sollicitudin</td>
                    <td className="px-4 py-2">Adipiscing adio nulla</td>
                    <td className="px-4 py-2">Pharetra id sit</td>
                    <td className="px-4 py-2 flex items-center">
                        <button className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded">
                        <span className="material-symbols-outlined">edit</span>
                        Edit
                        </button>
                        <button className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded">
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                    </td>
                    </tr>
                </tbody>
                </table>
                <br />
                <div className="flex justify-center">
                    <button className="px-3 py-2 rounded-l-md hover:bg-gray-300 focus:outline-none">
                    <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                    </button>

                    <div className="flex gap-2 h-[50px]">
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none  border-1 border-gray-500 rounded">1</button>
                        <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none border-1 border-gray-500 rounded">2</button>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none border-1 border-gray-500 rounded">3</button>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none border-1 border-gray-500 rounded">4</button>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none border-1 border-gray-500 rounded">5</button>
                    </div>

                    <button className="px-3 py-2 rounded-r-md hover:bg-gray-300 focus:outline-none">
                    <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                    </button>
                </div>
            </div>
        </div>
  )
}
