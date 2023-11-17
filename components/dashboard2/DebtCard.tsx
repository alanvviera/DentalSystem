import React from 'react';
import { Text, Title } from '@mantine/core';
import CustomCard from './CustomCard';

interface DebtCardProps {
  data: {
    debt: number;
    date?: string;
  };
}

const DebtCard: React.FC<DebtCardProps> = ({ data }) => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });

  return (
    <CustomCard title="Adeudo" showMoreButton>
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
