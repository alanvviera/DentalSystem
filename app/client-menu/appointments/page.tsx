import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";
import TilesSection from "../../../components/tiles-viewer/TileSection";
import CustomTile from "../../../components/tiles-viewer/CustomTile";
import { Title, Group, Button } from "@mantine/core";
import { PlusOutlined } from "@ant-design/icons";


type Appoint = {
  id: number,
  descripcion?: string;
  fecha: string;
  hora: string;
  doctor: string;
};



const Page = () => {
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
          href="/client-menu/appointments/create"
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
              baseLink={`/client-menu/appointments/${appt.id}`}>
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
              baseLink={`/client-menu/appointments/${appt.id}`}>
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
  
export default Page;
