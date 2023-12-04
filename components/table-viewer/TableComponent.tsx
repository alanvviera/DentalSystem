'use client'
import React, { useState } from 'react';
import SearchComponent from './SearchComponent'; // Ajusta la ruta según tu estructura de archivos
import { Table } from '@mantine/core';

interface TableComponentProps {
    headers: string[];
  }

interface Element {
  id: number;
  name: string;
  age: number;
  city: string;
  fecha: string;
}

const elements: Element[] = [
    { id: 1, name: 'John Doe', age: 25, city: 'Example City', fecha: 'Date' },
    { id: 1, name: 'loquito sabanero', age: 25, city: 'Example City', fecha: 'Date' },
    { id: 1, name: 'wewo', age: 25, city: 'Example City', fecha: 'Date' },
    { id: 1, name: 'Jbarro', age: 25, city: 'Example City', fecha: 'Date' },
    // ... Otros elementos
  ];

  const TableComponent: React.FC<TableComponentProps> = ({ headers }) => {
    const [filteredData, setFilteredData] = useState<Element[]>(elements);
  
    // Esta función se utilizará para establecer los datos filtrados
    const handleSetFilteredData = (data: Element[]) => {
      setFilteredData(data);
    };
  
    const columns: (keyof Element)[] = Object.keys(elements[0] || {}) as (keyof Element)[];
  
    const rows = filteredData.map((element) => (
      <Table.Tr key={element.id.toString()}>
        {columns.map((column, index) => (
          <Table.Td key={column.toString()}>{element[column]}</Table.Td>
        ))}
      </Table.Tr>
    ));
  
    return (
      <div className="flex flex-col items-center justify-between p-4 md:p-24 ">
        <div style={{ width: '100%', minHeight: '400px', overflow: 'auto' }}>
          <SearchComponent data={elements} setFilteredData={handleSetFilteredData} />
          <Table stickyHeader stickyHeaderOffset={60} className="bg-[#F1F7FE]" style={{ minWidth: '600px' }}>
            <Table.Thead>
              <Table.Tr>
                {headers.map((header, index) => (
                  <Table.Th key={index.toString()}>{header}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
            <Table.Caption></Table.Caption>
          </Table>
          {filteredData.length === 0 && (
            <p className="text-gray-500 text-center mt-4">No se encontraron resultados.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default TableComponent;



