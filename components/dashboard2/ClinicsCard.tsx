import React from 'react';
import CustomCard from './CustomCard';
import { TableScrollContainer } from '@mantine/core';
import CustomTable from './CustomTable';

type ClinicsCardProps = {
  headers: string[];
  items: Array<Record<string, any>>;
  baseLink?: string;
  itemId?: string;
  addButtonLink?: string;
  moreButtonLink?: string;
}

const ClinicsCard = ({ headers, items, baseLink, addButtonLink, moreButtonLink, itemId = undefined}:ClinicsCardProps) => (
    <CustomCard title="Clínicas" showAddButton addButtonLink={addButtonLink} moreButtonLink={moreButtonLink} showMoreButton moreButtonPosition='bottom'>
      <TableScrollContainer type="native" minWidth={500}>
        <CustomTable headers={headers} items={items} baseLink={baseLink} itemId={itemId}/>
      </TableScrollContainer>
    </CustomCard>
  );

export default ClinicsCard;