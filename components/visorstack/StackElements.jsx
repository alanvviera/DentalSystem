import React from 'react';
import { Container, Title, Group } from '@mantine/core';

const StackComponent = ({ title, items }) => {
  return (
    <Container style={{ marginBottom: '20px', maxWidth: '800px', margin: '0 auto', overflowX: 'auto' }}>
      <Title order={2} style={{ marginBottom: '10px', color: '#333', fontSize: '24px' }}>
        {title}
      </Title>
      <Group direction="column" spacing="md" style={{ width: '100%' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%',
              boxSizing: 'border-box',
              maxWidth: '100%', // Ajuste máximo al 100% del contenedor
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{item}</div>
            <div style={{ fontSize: '14px', color: '#555' }}>Additional details or description here...</div>
          </div>
        ))}
      </Group>
    </Container>
  );
};

export default StackComponent;
