// Importa los componentes de visualización
'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import StackComponent from '@/components/visorstack/StackElements';
import TileComponent from '@/components/visorstack/Tile';
import SectionedTilesComponent from '@/components/visorstack/TileSection';
import '@mantine/core/styles.css';

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

  const completedAppointments = [
    {
      title: 'Cita Realizada 1',
      imageUrl: 'url3',
      total: 200,
      adeudo: 0,
      fechaHora: '2023-11-10 10:00',
      
    },
  ];

 

  const asociado = [
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
    { title: 'Dental Gama', imageUrl: 'url5', direccion: 'Calle Guadalupe Victoria', numeroEdificio: '31', telefono: '646-154-6755' },
  ];

  return (
    <div className='m-auto' style={{ marginTop: '20px' }}>
      <SectionedTilesComponent title="Citas Pedientes" />
      <StackComponent
        title="Citas Pendientes"
        items={upcomingAppointments.map((appt, index) => ({ type: 'TileComponent', props: { key: index, ...appt } }))}
      />
      <SectionedTilesComponent title="Asociado" />
      <StackComponent
        title="Citas Pendientes"
        items={asociado.map((appt, index) => ({ type: 'TileComponent', props: { key: index, ...appt } }))}
      />
    </div>
  );
};

export default Appointments;
