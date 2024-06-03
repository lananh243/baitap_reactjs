import React, { useEffect, useState } from 'react'
type RowData = {
    col1: string;
    col2: string;
    col3: string;
};

const sampleData: RowData[] = [
    { col1: 'Litiam purus in', col2: 'Curabitur donec duis', col3: 'Marbi pharetra, accumsan' },
    { col1: 'Duis eget habitant', col2: 'At amet adio', col3: 'Commodo eget scelerisque' },
    { col1: 'Aliquam velit lacus', col2: 'Pellentesque egetstas placerant', col3: 'Tortor habitant sit' },
    { col1: 'Fermentum sceierisque ultricies', col2: 'Morbi sagittis nulla', col3: 'Quam semper quis' },
    { col1: 'Integer semper pellentesque', col2: 'Neque turpis enim', col3: 'Egestas non sociis' },
    { col1: 'Parturient at id', col2: 'Sem neque, mattis', col3: 'Pellentesque facilisis massa' },
    { col1: 'Amet, pretium eget', col2: 'In ispum volutpat', col3: 'Ut feugiat egestas' },
    { col1: 'Risus consequat sollicitudin', col2: 'Adipiscing adio nulla', col3: 'Pharetra id sit' },
];

localStorage.setItem('tableData', JSON.stringify(sampleData));

export default function Form() {
    const [data, setData] = useState<RowData[]>([]);

    useEffect(() => {
        const storedData = localStorage.getItem('tableData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    // const handleDelete = (index) => {
    //     const newData = data.filter((_, i) => i !== index);
    //     setData(newData);
    //     localStorage.setItem('tableData', JSON.stringify(newData));
    // };

    // const handleEdit = (index) => {
    //     // Chức năng "Edit" sẽ được triển khai sau
    //     console.log(`Editing row ${index}`);
    // };
    
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
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{row.col1}</td>
                            <td className="px-4 py-2">{row.col2}</td>
                            <td className="px-4 py-2">{row.col3}</td>
                            <td className="px-4 py-2 flex items-center">
                                <button
                                    className="w-[70px] h-[35px] bg-blue-400 text-white flex items-center justify-center gap-2 mr-4 rounded"
                                    // onClick={() => handleEdit(index)}
                                >
                                    <span className="material-symbols-outlined">edit</span>
                                    Edit
                                </button>
                                <button
                                    className="w-[130px] h-[35px] bg-yellow-300 text-white flex items-center justify-center gap-2 rounded"
                                    // onClick={() => handleDelete(index)}
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
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
