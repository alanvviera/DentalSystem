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
  showItemId?: boolean;
}

const CustomTable = ({ items, headers, baseLink = '#', itemId, showItemId}: CustomTableProps) => {
  const router = useRouter();
  const newItems = showItemId? [...items] : items.map((item) => {
    const newItem = {...item};
    delete newItem[itemId];
    return newItem;
  })

  const rows = newItems.map((item, index) => (
    <TableTr
      key={index}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if(itemId) {router.push(`${baseLink}/${items[index][itemId]}`);}
        else {router.push(`${baseLink}`);}
      }}
    >
      {Object.values(item).map((value, key) => (
        <TableTd key={key}>{value}</TableTd>
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
