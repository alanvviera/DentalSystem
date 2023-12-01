// pages/client-menu/appointments/[appointmentId]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Text, Space } from '@mantine/core';
import CustomTile from '../../../../components/tiles-viewer/CustomTile';
import VisualizeData from '../../../../components/visualize-data/VisualizeData';
import { Title, Button } from '@mantine/core';
import { ArrowLeftOutlined, EditFilled } from '@ant-design/icons';
import VisualizeDataButton from '../../../../components/visualize-data/buttonsData/VisualizeDataButton';
import EmployeeAppointmentUpdate from '../../../../components/employee-menu/appointments/EmployeeAppointmentUpdate';
import LabelDataText from '../../../../components/visualize-data/labelsData/LabelDataText';



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
    { id:3, descripcion: "Valoración ortodoncia", fecha: "2023-01-25", hora: "10:30", doctor: "Eladio Carreon"},
    { id:6, descripcion: "Extracción de muela", fecha: "2023-07-28", hora: "10:30", doctor: "Duki Gonzales"},
    { id:7, descripcion: "Radiografias dentales", fecha: "2023-05-01", hora: "11:30", doctor: "Chalino Sanchez"},
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
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <VisualizeData
        actionsTop={
          <>
            <Button
              component="a"
              href="/client-menu/appointments"
              leftSection={<ArrowLeftOutlined />}
              variant="subtle"
            >
              Volver a Citas
            </Button>
            <Space w={"4px"} /> 
          </>
        }
        content={
          <>
            <Title>Detalles de la cita</Title>
            <LabelDataText title={appointment.descripcion} type="Procedimiento:" />
            <LabelDataText title={appointment.fecha} type="Fecha:" />
            <LabelDataText title={appointment.hora} type="Hora:" />
            <LabelDataText title={appointment.doctor} type="Doctor Asignado:" />
          </>
      }
      />
    </div>
  );
};

export default AppointmentDetails;