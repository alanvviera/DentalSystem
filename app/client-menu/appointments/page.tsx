import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";
import TilesSection from "../../../components/tiles-viewer/TileSection";
import CustomTile from "../../../components/tiles-viewer/CustomTile";

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
    { id:3, descripcion: "Radiografias dentales", fecha: "2023-12-01", hora: "11:30", doctor: "Chalino Sanchez"},
  ];
  
  return (
    <div style={{ margin: "20px" }}>
      <TilesSection title="Citas" />
      <Grid>
        {citas.map((appt: Appoint, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile key={index} title={appt.descripcion}>
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
