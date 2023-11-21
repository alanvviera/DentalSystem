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
  const newItems = showItemId? items : items.map((item)=> {
    const new_item = {...item};
    delete new_item[itemId];
    return new_item;
  });
  const rows = newItems.map((item, index) => (
    <TableTr
      style={{ cursor: 'pointer' }}
      onClick={() => {
        if(itemId) {router.push(`${baseLink}/${items[index][itemId]}`);}
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
