
import React from "react";
import "@mantine/core/styles.css";
import { Grid, GridCol, Text } from "@mantine/core";
import TilesSection from "../../../components/tiles-viewer/TileSection";
import CustomStack from "../../../components/tiles-viewer/CustomStack";
import CustomTile from "../../../components/tiles-viewer/CustomTile";

type History = {
  id: number;
  clinica: string;
  imageUrl?: string;
  fecha: string;
  hora: string,
  descripcion: string;
  receta?: string;
}

const Page = () => {
  const history: History[] = [
    {
      id: 1,
      clinica: "Dental Gama",
      imageUrl: "",
      fecha: "2023-04-21",
      hora: "10:30",
      descripcion: "Valoración para posible tratamiento de ortodoncia",
      receta: "No aplica",
    },
    {
      id: 2,
      clinica: "Medichal Tecnologies",
      imageUrl: "",
      fecha: "2023-07-14",
      hora: "10:30",
      descripcion: "Extracción de muelas del juicio",
      receta: "Medicamento: Ibuprofeno 400 mg \nCantidad: 20 tabletas \nInstrucciones: Tomar 1 tableta cada 8 horas con alimentos.",
    },
    {
      id: 3,
      clinica: "Smiles",
      imageUrl: "",
      fecha: "2023-01-02",
      hora: "11:30",
      descripcion: "Revisión y limpieza bucal",
      receta: "No aplica",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <TilesSection title="Historial Medico" />
      <Grid>
        {history.map((appt: History, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile title={appt.clinica} baseLink={`/client-menu/medicalHistory/${appt.id}`}>
              <Text size="md">
                <strong>Fecha:</strong> {appt.fecha}
              </Text>
              <Text size="md">
                <strong>Hora:</strong> {appt.hora}
              </Text>
              <Text size="md">
                <strong>Detalles de la cita:</strong> {appt.descripcion}
              </Text>
              <Text size="md">
                <strong>Receta:</strong> {appt.receta}
              </Text>
            </CustomTile>
          </GridCol>
        ))}
      </Grid>
    </div>
  );
};

export default Page;
