import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer } from '@mantine/core';
import CustomTable from './CustomTable';

interface AppointmentCardProps {
  headers: string[];
  items: Array<Record<string, any>>;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ headers, items }) => {
  return (
    <CustomCard title="Citas" showAddButton showMoreButton>
      <TableScrollContainer type="native" minWidth={500}>
        <CustomTable headers={headers} items={items} />
      </TableScrollContainer>
    </CustomCard>
  );
};

export default AppointmentCard;