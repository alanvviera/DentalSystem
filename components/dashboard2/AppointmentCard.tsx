import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer } from '@mantine/core';
import CustomTable from './CustomTable';

interface AppointmentCardProps {
  headers: string[];
  items: Array<Record<string, any>>;
  baseLink?: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ headers, items, baseLink = "#" }) => {
  return (
    <CustomCard title="Citas" showAddButton showMoreButton>
      <TableScrollContainer type="native" minWidth={500}>
        <CustomTable headers={headers} items={items} baseLink={baseLink} />
      </TableScrollContainer>
    </CustomCard>
  );
};

export default AppointmentCard;