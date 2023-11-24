'use client'
import React, { useState } from 'react';
import SearchComponent from './SearchComponent'; // Ajusta la ruta según tu estructura de archivos
import { Table } from '@mantine/core';
import { useRouter } from 'next/navigation';

interface CustomTableProps {
    headers: string[];
    elements: Element[]
}

interface Element {
    id: string;
    name: string;
    //   qr: string;
    //   category: string;
    //   provider: string;
    acquisitionDate: string;
    expirationDate: string;
    cost: number;
    //   price: number;
    stock: number;
    //   maxStock: number;
    //   minStock: number;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, elements }) => {
    const [filteredData, setFilteredData] = useState<Element[]>(elements);
    const router = useRouter();

    // Esta función se utilizará para establecer los datos filtrados
    const handleSetFilteredData = (data: Element[]) => {
        setFilteredData(data);
    };

    const columns: (keyof Element)[] = Object.keys(elements[0] || {}) as (keyof Element)[];

    const rows = filteredData.map((element) => (
        <Table.Tr style={{ cursor: 'pointer' }} key={element.id.toString()} onClick={(data) => {
            router.push(`inventory/${element.id.toString()}`)
        }} >
            {columns.map((column, index) => (
                <Table.Td key={column.toString()}>{element[column]}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <div className="flex flex-col items-center justify-between pt-4">
            <div style={{ width: '100%', minHeight: 'min-content', overflow: 'auto' }}>
                <SearchComponent data={elements} setFilteredData={handleSetFilteredData} />
                <Table striped withTableBorder  withColumnBorders stickyHeader stickyHeaderOffset={60} className="bg-[#F1F7FE]" style={{ minWidth: '600px' }}>
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

export default CustomTable;