import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer } from '@mantine/core';
import CustomTable from './CustomTable';

type AppointmentCardProps = {
  headers: string[];
  items: Array<Record<string, any>>;
  baseLink?: string;
  itemId?: string;
  addButtonLink?: string;
  moreButtonLink?: string;
}

const AppointmentCard = ({ headers, items, baseLink, addButtonLink, moreButtonLink, itemId}: AppointmentCardProps) => (
    <CustomCard title="Citas" showAddButton addButtonLink={addButtonLink} showMoreButton moreButtonLink={moreButtonLink}>
      <TableScrollContainer type="native" minWidth={500}>
        <CustomTable headers={headers} items={items} baseLink={baseLink} itemId={itemId}/>
      </TableScrollContainer>
    </CustomCard>
  );

export default AppointmentCard;