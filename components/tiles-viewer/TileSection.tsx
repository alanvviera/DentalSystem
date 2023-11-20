import React from 'react';
import { Title, Divider, Box } from '@mantine/core';

type TilesSectionProps = {
  title?: string;
}

const TilesSection = ({ title }: TilesSectionProps) => (
    <Box my={20}>
      <Title order={2} style={{ marginBottom: '10px', color: '#3390FF', fontSize: '24px', textAlign: 'left' }}>
        {title}
      </Title>
      <Divider style={{height: '4px', background: '#3390FF' }} />
    </Box>
  );

export default TilesSection;