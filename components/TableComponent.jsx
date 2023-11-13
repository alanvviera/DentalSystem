'use client'
// components/TableComponent.js
import React, { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';

// Mock data for testing
const mockData = [
  { id: 1, name: 'John Doe', age: 25, city: 'Example City', fecha: 'Date' },
  { id: 2, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },
  { id: 3, name: 'Jane Doe', age: 30, city: 'Another City', fecha: 'Date' },

  
  // Add more mock data as needed
];

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the API
    setTableData(mockData);
    setFilteredData(mockData); // Inicialmente, los datos filtrados son los mismos que los datos originales
  }, []);

  return (
    <div className="flex flex-col items-center justify-between p-4 md:p-24">
      <div className="max-w-full overflow-x-auto rounded-lg bg-[#F1F7FE] border border-gray-300 p-4 relative mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4">
        <SearchComponent data={tableData} setFilteredData={setFilteredData} />
        <div className="table-container max-h-96 overflow-y-auto">
          {filteredData.length > 0 ? (
            <table className="w-full md:w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(filteredData[0] || {}).map((field) => (
                    <th
                      key={field}
                      className="py-2 px-4 border-b border-gray-300 text-sm font-medium text-gray-600"
                    >
                      {field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    {Object.values(item).map((value, idx) => (
                      <td
                        key={idx}
                        className="py-2 px-4 border-b border-gray-300 text-sm"
                      >
                        {value}
                      </td>
                    ))}
    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center mt-4">No se encontraron datos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
