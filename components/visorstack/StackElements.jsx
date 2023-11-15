import React from 'react';
import { Container, Title, Group } from '@mantine/core';
import TileComponent from './Tile';
import SectionedTilesComponent from './TileSection';

const StackComponent = ({ title, items }) => {
  return (
    <Container style={{ marginBottom: '20px', maxWidth: '800px', margin: '0 auto', overflowX: 'auto' }}>
      <Title order={2} style={{ marginBottom: '10px', color: '#333', fontSize: '24px' }}>
        {title}
      </Title>
      <Group direction="column" spacing="md" style={{ width: '100%' }}>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            {item.type === 'TileComponent' ? (
              <TileComponent {...item.props} />
            ) : (
              <SectionedTilesComponent {...item.props} />
            )}
          </div>
        ))}
      </Group>
    </Container>
  );
};

export default StackComponent;
