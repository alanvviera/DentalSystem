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
    { title: 'Jose Arturo Castro Jimenez', imageUrl: 'url1' },
    { title: 'Cita 2', imageUrl: 'url2' },
  ];

  const completedAppointments = [
    { title: 'Cita Realizada 1', imageUrl: 'url3' }
  ];

  const patients = [
    { title: 'Paciente 1', imageUrl: 'url5' },
    { title: 'Paciente 2', imageUrl: 'url6' },
    { title: 'Paciente 3', imageUrl: 'url7' },
  ];

  return (
    <div className='m-auto' style={{ marginTop: '20px' }}>
        {/* Uso del componente de apilamiento para citas pendientes */}
        <StackComponent title="Citas Pendientes" items={upcomingAppointments.map((appt, index) => <TileComponent key={index} {...appt} />)} />

        {/* Uso del componente de mosaicos para pacientes */}
        <StackComponent title="Pacientes" items={patients.map((patient, index) => <TileComponent key={index} {...patient} />)} />

        {/* Uso del componente de secciones para citas */}
        <SectionedTilesComponent
          title='Citas Realizadas'
          upcomingTiles={upcomingAppointments}
          completedTiles={completedAppointments}
        />
      </div>
  );
};

export default Appointments;
