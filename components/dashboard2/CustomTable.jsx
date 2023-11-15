"use client";
import {
  Table,
  TableThead,
  TableTr,
  TableTd,
  TableTh,
  TableTbody,
} from "@mantine/core";
import { useRouter } from "next/navigation";

const CustomTable = ({items, headers, baseLink = "#"}) => {
  const router = useRouter();
  const rows = items.map((item) => (
    <TableTr
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push(`${baseLink}`);
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
