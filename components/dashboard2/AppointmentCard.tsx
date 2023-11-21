import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer, Text } from '@mantine/core';
import CustomTable from './CustomTable';

type AppointmentCardProps = {
  headers: string[];
  items: Array<Record<string, any>>;
  baseLink?: string;
  itemId?: string;
  addButtonLink?: string;
  moreButtonLink?: string;
  showItemId?: boolean;
}

const AppointmentCard = ({ headers, items, baseLink, addButtonLink, moreButtonLink, itemId, showItemId }: AppointmentCardProps) => {
  return (
    <CustomCard title="Citas" showAddButton addButtonLink={addButtonLink} showMoreButton moreButtonLink={moreButtonLink}>
      {
        items.length > 0 ? (<TableScrollContainer type="native" minWidth={500}>
          <CustomTable headers={headers} items={items} baseLink={baseLink} itemId={itemId} showItemId={showItemId} />
        </TableScrollContainer>) : (
          <Text>Sin elementos para mostrar</Text>
        )
      }
    </CustomCard>
  );
}

export default AppointmentCard;