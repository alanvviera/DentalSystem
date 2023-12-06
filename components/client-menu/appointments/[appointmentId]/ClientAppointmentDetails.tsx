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
import { headers } from 'next/headers';


const getData = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/clientcheckappointment/${id}`, {
      method: "GET", // o "POST" si lo prefieres
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};

const ClientAppointmentDetails = async ({ appointmentId }) => {
    const clientData = await getData(appointmentId);
    if(!clientData){
      return <p>No tiene acceso a esta página.</p>
    }
    const { appointment } = clientData;
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
              <LabelDataText title={appointment.subject} type="Procedimiento:" />
              <LabelDataText title={appointment.date} type="Fecha:" />
              <LabelDataText title={appointment.hora} type="Hora:" />
              <LabelDataText title={appointment.doctor_name} type="Atiende:" />
            </>
          }
        />
      </div>
    );
};

export default ClientAppointmentDetails;