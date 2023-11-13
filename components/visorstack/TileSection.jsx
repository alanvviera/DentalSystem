import React from 'react';
import { Title, Group, Container } from '@mantine/core';
import TileComponent from './Tile';

const SectionedTilesComponent = ({ title, upcomingTiles, completedTiles }) => {
  const hasUpcomingTiles = upcomingTiles.length > 0;
  const hasCompletedTiles = completedTiles.length > 0;

  return (
    <Container>
      <Group direction="column" align="center" style={{ marginBottom: '20px' }}>
        <Title order={2} style={{ marginBottom: '20px', color: '#333', fontSize: '24px', textAlign: 'center' }}>
          {title}
        </Title>
        <div className="sections">
          <div className="section">
            <Title order={3} style={{ marginBottom: '10px', color: '#555', textAlign: 'center' }}>
              Próximas Citas
            </Title>
            {upcomingTiles.map((tile, index) => (
              <TileComponent key={index} {...tile} />
            ))}
          </div>
          {hasUpcomingTiles && hasCompletedTiles && (
            <div className="section">
              <Title order={3} style={{ marginBottom: '10px', color: '#555', textAlign: 'center' }}>
                Citas Realizadas
              </Title>
              {completedTiles.map((tile, index) => (
                <TileComponent key={index} {...tile} />
              ))}
            </div>
          )}
        </div>
      </Group>
      {/* Media query para pantallas más grandes */}
      <style jsx>{`
        @media (min-width: 768px) {
          .sections {
            display: flex;
            justify-content: space-between;
            align-items: stretch; /* Asegura que ambas secciones tengan la misma altura */
          }

          .section {
            width: 48%;
          }
        }
      `}</style>
    </Container>
  );
};

export default SectionedTilesComponent;
