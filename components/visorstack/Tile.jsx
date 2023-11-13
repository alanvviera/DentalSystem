import React from 'react';
import { Card, Image, Title, Group } from '@mantine/core';

const TileComponent = ({ title, imageUrl, onClick }) => {
  return (
    <Card
      onClick={onClick}
      style={{
        cursor: 'pointer',
        marginBottom: '10px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        overflow: 'auto', // Añade un scrollbar si el contenido se desborda
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        maxWidth: '100%', // Ajuste máximo al 100% del contenedor
        margin: '0 auto', // Centrar en la página
      }}
    >
      <Image
        src={imageUrl}
        height={120}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px 8px 0 0',
        }}
      />
      <Group direction="column" align="start" style={{ padding: '20px' }}>
        <Title order={4} style={{ marginBottom: '10px', color: '#333' }}>
          {title}
        </Title>
        <div style={{ fontSize: '14px', color: '#555' }}>
          Elementos de la pila...
        </div>
      </Group>
    </Card>
  );
};

export default TileComponent;
