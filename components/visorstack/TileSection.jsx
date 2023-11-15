import React from 'react';
import { Title, Container, Divider, Box } from '@mantine/core';

const SectionedTilesComponent = ({ title }) => {
  return (
    <Box my={20}>
      <Title order={2} style={{ marginBottom: '10px', color: '#333', fontSize: '24px', textAlign: 'left' }}>
        {title}
      </Title>
      <Divider style={{height: '4px', background: '#ddd' }} />
    </Box>
  );
};

export default SectionedTilesComponent;
