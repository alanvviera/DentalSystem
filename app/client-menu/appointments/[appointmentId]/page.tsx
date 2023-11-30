// pages/client-menu/appointments/[appointmentId]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import CustomTile from '../../../../components/tiles-viewer/CustomTile';

type Appoint = {
  id: number;
  descripcion?: string;
  fecha: string;
  hora: string;
  doctor: string;
};

const getData = async (id: number) => {
  // Simulando la obtención de datos de una cita específica
  const res = [
    { id: 1, descripcion: 'Valoración ortodoncia', fecha: '2023-11-25', hora: '10:30', doctor: 'Eladio Carreon' },
    { id: 2, descripcion: 'Extracción de muela', fecha: '2023-11-28', hora: '10:30', doctor: 'Duki Gonzales' },
    { id: 5, descripcion: 'Radiografias dentales', fecha: '2023-12-01', hora: '11:30', doctor: 'Chalino Sanchez' },
  ].find(appointment => appointment.id === id);

  return res;
};

const AppointmentDetails: React.FC = () => {
  const [appointment, setAppointment] = useState<Appoint | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener appointmentId desde location.pathname
        const appointmentId = parseInt(window.location.pathname.split('/').pop() || '', 10);

        if (isNaN(appointmentId)) {
          throw new Error('Invalid appointmentId');
        }

        const res = await getData(appointmentId);
        setAppointment(res);
      } catch (error) {
        console.error('Error obteniendo detalles de la cita', error);
      }
    };

    fetchData();
  }, []); // No es necesario pasar dependencias

  if (!appointment) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div style={{ margin: '20px' }}>
      <CustomTile>
      <Text size="lg">
        <strong>Descripción:</strong> {appointment.descripcion}
      </Text>
      <Text size="md">
        <strong>Fecha:</strong> {appointment.fecha}
      </Text>
      <Text size="md">
        <strong>Hora:</strong> {appointment.hora}
      </Text>
      <Text size="md">
        <strong>Doctor Asignado:</strong> {appointment.doctor}
      </Text>
      </CustomTile>
    </div>
  );
};

export default AppointmentDetails;
