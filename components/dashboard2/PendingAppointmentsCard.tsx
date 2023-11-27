import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer, Text } from '@mantine/core';
import CustomTable from './CustomTable';

type PendingAppointmentCardProps = {
  headers: string[];
  items: Array<Record<string, any>>;
  baseLink?: string;
  itemId?: string;
  moreButtonLink?:string; 
  showItemsId?: boolean;
}

const PendingAppointmentCard = ({ headers, items, baseLink, itemId, moreButtonLink, showItemsId}:PendingAppointmentCardProps) => (
    <CustomCard title="Citas de hoy" showMoreButton moreButtonPosition='top' moreButtonLink={moreButtonLink}>
      {items.length > 0 ? (<TableScrollContainer type="native" minWidth={500}>
          <CustomTable headers={headers} items={items} baseLink={baseLink} itemId={itemId} showItemId={showItemsId} />
        </TableScrollContainer>) : (
          <Text>Sin elementos para mostrar</Text>
        )}
    </CustomCard>
  );

export default PendingAppointmentCard;