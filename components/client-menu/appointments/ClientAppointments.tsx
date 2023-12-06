import React, { useEffect, useState } from "react";
import { Grid, GridCol, Text } from "@mantine/core";
import TilesSection from "../../tiles-viewer/TileSection";
import CustomTile from "../../tiles-viewer/CustomTile";
import { Title, Group, Button } from "@mantine/core";
import { PlusOutlined } from "@ant-design/icons";
import { checkEnvironment } from "../../../libs/checkEnvironment";

type Appoint = {
  id: number;
  descripcion?: string;
  fecha: string;
  hora: string;
  doctor_name: string;
};



const ClientAppointments = async () => {


  const getData = async () => {

    const url = `${checkEnvironment()}/api/clientcheckappointment`;
    try {
      const response = await fetch(url, {
        method: "GET", // o "POST" si lo prefieres
        headers: {
          "Content-Type": "application/json",
          // Agrega cualquier encabezado adicional que pueda necesitar (como tokens de autorización, etc.)
        }
      }); // Reemplaza "/tu-endpoint" con la URL correcta

      const data = await response.json();
      return {
        appointmentsPending: data.appointmentsPending,
        appointmentsCompleted: data.appointmentsCompleted
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
      return { appointmentsPending: undefined, appointmentsCompleted: undefined }
    }
  }

  const { appointmentsPending, appointmentsCompleted } = await getData();

  if (!appointmentsPending || !appointmentsCompleted) {
    return <p>Lo sentimos, ocurrió un error.</p>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <Group justify="space-between">
        <Title>Citas</Title>
        <Button
          leftSection={<PlusOutlined />}
          component="a"
          href="/menu/appointments/create"
        >
          Agregar
        </Button>
      </Group>
      <TilesSection title="Pendientes" />
      <Grid>
        {appointmentsPending.map((appt: Appoint, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile
              key={index}
              title={appt.descripcion || ""}
              baseLink={`/menu/appointments/${appt.id}`}
            >
              <Text size="md">
                <strong>Fecha:</strong> {appt.fecha}
              </Text>
              <Text size="md">
                <strong>Hora:</strong> {appt.hora}
              </Text>
              <Text size="md">
                <strong>Doctor Asignado:</strong> {appt.doctor_name}
              </Text>
            </CustomTile>
          </GridCol>
        ))}
      </Grid>
      <TilesSection title="Realizadas" />
      <Grid>
        {appointmentsCompleted.map((appt: Appoint, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile
              key={index}
              title={appt.descripcion || ""}
              baseLink={`/menu/appointments/${appt.id}`}
            >
              <Text size="md">
                <strong>Fecha:</strong> {appt.fecha}
              </Text>
              <Text size="md">
                <strong>Hora:</strong> {appt.hora}
              </Text>
              <Text size="md">
                <strong>Doctor Asignado:</strong> {appt.doctor_name}
              </Text>
            </CustomTile>
          </GridCol>
        ))}
      </Grid>
    </div>
  );
};

export default ClientAppointments;



/*import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";
import TilesSection from "../../tiles-viewer/TileSection";
import CustomTile from "../../tiles-viewer/CustomTile";
import { Title, Group, Button } from "@mantine/core";
import { PlusOutlined } from "@ant-design/icons";


type Appoint = {
  id: number,
  descripcion?: string;
  fecha: string;
  hora: string;
  doctor: string;
};



const ClientAppointments = () => {
  const citas: Appoint[] = [
    { id:1, descripcion: "Valoración ortodoncia", fecha: "2023-11-25", hora: "10:30", doctor: "Eladio Carreon"},
    { id:2, descripcion: "Extracción de muela", fecha: "2023-11-28", hora: "10:30", doctor: "Duki Gonzales"},
    { id:5, descripcion: "Radiografias dentales", fecha: "2023-12-01", hora: "11:30", doctor: "Chalino Sanchez"},
    
  ];

  const citasF: Appoint[] = [
    { id:3, descripcion: "Valoración ortodoncia", fecha: "2023-01-25", hora: "10:30", doctor: "Eladio Carreon"},
    { id:6, descripcion: "Extracción de muela", fecha: "2023-07-28", hora: "10:30", doctor: "Duki Gonzales"},
    { id:7, descripcion: "Radiografias dentales", fecha: "2023-05-01", hora: "11:30", doctor: "Chalino Sanchez"},
    
  ];
  
  return (
    <div style={{ margin: "20px" }}>
      <Group justify="space-between">
        <Title>Citas</Title>
        <Button
          leftSection={<PlusOutlined />}
          component="a"
          href="/menu/appointments/create"
        >
          Agregar
        </Button>
      </Group>
      <TilesSection title="Pendientes" />
      <Grid>
        {citas.map((appt: Appoint, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile 
              key={index} 
              title={appt.descripcion} 
              baseLink={`/menu/appointments/${appt.id}`}>
              <Text size="md">
                <strong>Fecha:</strong> {appt.fecha}
              </Text>
              <Text size="md">
                <strong>Hora:</strong> {appt.hora}
              </Text>
              <Text size="md">
                <strong>Doctor Asignado:</strong> {appt.doctor}
              </Text>
            </CustomTile>
          </GridCol>
        ))}
      </Grid>
      <TilesSection title="Realizadas" />
      <Grid>
        {citasF.map((appt: Appoint, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile 
              key={index} 
              title={appt.descripcion} 
              baseLink={`/menu/appointments/${appt.id}`}>
              <Text size="md">
                <strong>Fecha:</strong> {appt.fecha}
              </Text>
              <Text size="md">
                <strong>Hora:</strong> {appt.hora}
              </Text>
              <Text size="md">
                <strong>Doctor Asignado:</strong> {appt.doctor}
              </Text>
            </CustomTile>
          </GridCol>
        ))}
      </Grid>
    </div>
  );
};
  
export default ClientAppointments;
*/