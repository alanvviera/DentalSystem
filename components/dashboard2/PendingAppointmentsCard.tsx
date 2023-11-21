import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer } from '@mantine/core';
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
    <CustomCard title="Citas pendientes" showMoreButton moreButtonPosition='top' moreButtonLink={moreButtonLink}>
      <TableScrollContainer type="native" minWidth={500}>
        <CustomTable headers={headers} items={items} baseLink={baseLink} itemId={itemId} showItemId={showItemsId}/>
      </TableScrollContainer>
    </CustomCard>
  );

export default PendingAppointmentCard;