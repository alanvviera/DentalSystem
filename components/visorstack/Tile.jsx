import React from 'react';
import { Card, Image, Title, Group, Text } from '@mantine/core';

const TileComponent = ({
  title,
  imageUrl,
  onClick,
  total,
  adeudo,
  fechaHora,
  descripcion,
  numeroEdificio,
  telefono,
  direccion
}) => {
  return (
    <Card
      onClick={onClick}
      style={{
        cursor: 'pointer',
        marginBottom: '20px',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        boxSizing: 'border-box',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // Se agrega position:relative al Card
      }}
    >
      <Image
        src={imageUrl}
        height={180}
        style={{
          width: '100%',
          height: 'auto',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
      <Group
        direction="column"
        align="start"
        style={{ padding: '20px', paddingTop: '10px', flex: 1, width: '100%' }}
      >
        <Title order={4} style={{ marginBottom: descripcion ? '10px' : '20px', color: '#333' }}>
          {title}
        </Title>

        {descripcion && (
          <Text style={{ fontSize: '14px', color: '#555', marginBottom: '10px', width: '100%' }}>
            Descripción: {descripcion}
          </Text>
        )}

        {/* Mostrar el campo de fecha y hora si se proporciona */}
        {fechaHora && (
          <Text
            align="right"
            style={{
              fontSize: '14px',
              color: '#555',
              position: 'absolute',
              top: '10px',
              right: '20px',
            }}
          >
            {fechaHora}
          </Text>
        )}

        {direccion && (
          <Text style={{ fontSize: '14px', color: '#555', marginBottom: '10px', width: '100%' }}>
            Dirección: {direccion}
          </Text>
        )}

        {/* Mostrar el campo de descripción (número de edificio) si se proporciona */}
        {numeroEdificio && (
          <Text style={{ fontSize: '14px', color: '#555', marginBottom: '10px', width: '100%' }}>
            Edificio: {numeroEdificio}
          </Text>
        )}

        {/* Mostrar el campo de total y adeudo si se proporciona */}
        {(total !== undefined || adeudo !== undefined) && (
          <Group direction="column" align="end" style={{ marginTop: 'auto', width: '100%' }}>
            {/* Mostrar el campo de total si se proporciona */}
            {total !== undefined && (
              <Text
                align="right"
                style={{
                  fontSize: '14px',
                  color: '#555',
                  fontWeight: 'bold',
                  right: '20px',
                }}
              >
                Total: {total}
              </Text>
            )}

            {/* Mostrar el campo de adeudo si se proporciona */}
            {adeudo !== undefined && (
              <Text
                align="right"
                style={{
                  fontSize: '14px',
                  color: '#555',
                  fontWeight: 'bold',
                  right: '20px',
                }}
              >
                Adeudo: {adeudo}
              </Text>
            )}
          </Group>
        )}

        {/* Mostrar el campo de teléfono si se proporciona */}
        {telefono && (
          <Text style={{ fontSize: '14px', color: '#555', marginBottom: '10px', width: '100%' }}>
            Teléfono: {telefono}
          </Text>
        )}
      </Group>
    </Card>
  );
};

export default TileComponent;
