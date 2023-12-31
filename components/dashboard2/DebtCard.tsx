import React from 'react';
import { Text, Title } from '@mantine/core';
import CustomCard from './CustomCard';

type DebtCardProps = {
  data: {
    debt?: number;
    date?: string;
  };
  moreButtonLink?: string;
}

const DebtCard = ({ data, moreButtonLink }: DebtCardProps) => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

  return (
    <CustomCard title="Adeudo" showMoreButton moreButtonLink={moreButtonLink}>
      <Title order={1}>{formatter.format(data.debt)} </Title>
      {data.debt && <Text size="lg" c="dimmed">
        {new Date(data.date).toLocaleDateString('es-mx', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </Text>}
    </CustomCard>
  );
};

export default DebtCard;
