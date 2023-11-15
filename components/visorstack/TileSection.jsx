import React from 'react';
import { Title, Container, Divider } from '@mantine/core';

const SectionedTilesComponent = ({ title }) => {
  return (
    <Container style={{ marginBottom: '20px' }}>
      <Title order={2} style={{ marginBottom: '20px', color: '#333', fontSize: '24px', textAlign: 'left' }}>
        {title}
      </Title>
      <Divider style={{ margin: '20px 0', height: '4px', background: '#ddd' }} />
    </Container>
  );
};

export default SectionedTilesComponent;
