"use client";
import React from 'react';
import {
  Table,
  TableThead,
  TableTr,
  TableTd,
  TableTh,
  TableTbody,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

type CustomTableProps = {
  items: Array<Record<string, any>>;
  headers: string[];
  baseLink?: string;
  itemId?: string;
}

const CustomTable = ({ items, headers, baseLink = '#', itemId }: CustomTableProps) => {
  const router = useRouter();
  const rows = items.map((item) => (
    <TableTr
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if(itemId) {router.push(`${baseLink}/${item[itemId]}`);}
        else {router.push(`${baseLink}`);}
      }}
      key={item.name}
    >
      {Object.values(item).map((value, index) => (
        <TableTd key={index}>{value}</TableTd>
      ))}
    </TableTr>
  ));

  return (
    <Table highlightOnHover>
      <TableThead>
        <TableTr>
          {headers.map((header) => (
            <TableTh key={header}>{header}</TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
    </Table>
  );
};

export default CustomTable;
