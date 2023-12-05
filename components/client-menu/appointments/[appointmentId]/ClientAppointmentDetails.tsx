// pages/menu/appointments/[appointmentId]/page.tsx
import React, { useEffect, useState } from 'react';
import { Text, Space } from '@mantine/core';
import CustomTile from '../../../tiles-viewer/CustomTile';
import VisualizeData from '../../../visualize-data/VisualizeData';
import { Title, Button } from '@mantine/core';
import { ArrowLeftOutlined, EditFilled } from '@ant-design/icons';
import VisualizeDataButton from '../../../visualize-data/buttonsData/VisualizeDataButton';
import EmployeeAppointmentUpdate from '../../../employee-menu/appointments/EmployeeAppointmentUpdate';
import LabelDataText from '../../../visualize-data/labelsData/LabelDataText';



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
    { id: 3, descripcion: "Valoración ortodoncia", fecha: "2023-01-25", hora: "10:30", doctor: "Eladio Carreon" },
    { id: 6, descripcion: "Extracción de muela", fecha: "2023-07-28", hora: "10:30", doctor: "Duki Gonzales" },
    { id: 7, descripcion: "Radiografias dentales", fecha: "2023-05-01", hora: "11:30", doctor: "Chalino Sanchez" },
  ].find(appointment => appointment.id == id);

  return res;
};

const ClientAppointmentDetails = async ({ appointmentId }) => {

  const fetchData = async () => {
    try {
      // Obtener appointmentId desde location.pathname

      if (isNaN(appointmentId)) {
        throw new Error('Invalid appointmentId');
      }

      const res = await getData(appointmentId);

      return {
        appointment: res
      }
    } catch (error) {
      console.error('Error obteniendo detalles de la cita', error);
      throw new Error(error);
    }
  }

  try {
    const { appointment } = await fetchData();
    return (
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <VisualizeData
          actionsTop={
            <>
              <Button
                component="a"
                href="/menu/appointments"
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

  } catch (error) {
    return <p>Cita no encontrada</p>;
  }

};

export default ClientAppointmentDetails;