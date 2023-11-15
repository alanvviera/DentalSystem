// Importa los componentes de visualización
'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import StackComponent from '@/components/visorstack/StackElements';
import TileComponent from '@/components/visorstack/Tile';
import SectionedTilesComponent from '@/components/visorstack/TileSection';
import '@mantine/core/styles.css';
import { Box, Text } from '@mantine/core';

const Appointments = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <LoadingScreen />;

  // Datos de ejemplo para citas y pacientes
  const upcomingAppointments = [
    {
      title: 'Jose Arturo Castro Jimenez',
      imageUrl: 'url1',
      total: 150,
      adeudo: 50,
      fechaHora: '2023-11-14 15:30',

    },
    {
      title: 'Jose Alfrego Gimenez ',
      imageUrl: 'url1',
      fechaHora: '2023-11-15 16:00',
    },
    {
      imageUrl: 'url1',
      title: 'Jose Alfrego Gimenez ',
    },
  ];

  const asociado = [
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
  ];

  return (
    <div style={{ margin: '20px' }}>
      <SectionedTilesComponent title="Citas Pendientes" />
      <StackComponent >
        {upcomingAppointments.map((appt, index) => (<TileComponent key={index} title={appt.title}
          topRightText={appt.fechaHora}
          bottomRightText1={appt.adeudo && `Adeudo: ${appt.adeudo}`}
          bottomRightText2={appt.total && `Total: ${appt.total}`} />))}
      </StackComponent>
      <SectionedTilesComponent title="Asociado" />
      <StackComponent title="Citas Pendientes">
        {asociado.map((appt, index) => (<TileComponent key={index} title={appt.title}>
          <Text size='md'> Dirección: {appt.direccion} </Text>
          <Text size='md'> Numero del edificio: {appt.numeroEdificio} </Text>
          <Text size='md'> Telefono: {appt.telefono} </Text>
        </TileComponent>))}
      </StackComponent>
    </div>
  );
};

export default Appointments;
