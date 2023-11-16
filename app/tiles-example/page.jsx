// Importa los componentes de visualización
"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { LoadingScreen } from "@/components/LoadingScreen";
import "@mantine/core/styles.css";
import { Box, Text } from "@mantine/core";
import TilesSection from "@/components/tiles-viewer/TileSection";
import CustomStack from "@/components/tiles-viewer/CustomStack";
import CustomTile from "@/components/tiles-viewer/CustomTile";

const SamplePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <LoadingScreen />;

  // Example data
  const upcomingAppointments = [
    {
      title: "Jose Arturo Castro Jimenez",
      imageUrl: "url1",
      total: 150,
      adeudo: 50,
      fechaHora: "2023-11-14 15:30",
    },
    {
      title: "Jose Alfrego Gimenez ",
      imageUrl: "url1",
      fechaHora: "2023-11-15 16:00",
    },
    {
      imageUrl: "url1",
      title: "Jose Alfrego Gimenez ",
    },
  ];

  const asociado = [
    {
      title: "Dental Gama",
      imageUrl: "url5",
      direccion: "Calle Guadalupe Victoria",
      numeroEdificio: "31",
      telefono: "646-154-6755",
    },
    {
      title: "Dental Gama",
      imageUrl: "url5",
      direccion: "Calle Guadalupe Victoria",
      numeroEdificio: "31",
      telefono: "646-154-6755",
    },
    {
      title: "Dental Gama",
      imageUrl: "url5",
      direccion: "Calle Guadalupe Victoria",
      numeroEdificio: "31",
      telefono: "646-154-6755",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <TilesSection title="Citas Pendientes" />
      <CustomStack>
        {upcomingAppointments.map((appt, index) => (
          <CustomTile
            key={index}
            title={appt.title}
            topRightText={appt.fechaHora}
            bottomRightText1={appt.adeudo && `Adeudo: ${appt.adeudo}`}
            bottomRightText2={appt.total && `Total: ${appt.total}`}
          />
        ))}
      </CustomStack>
      <TilesSection title="Asociado" />
      <CustomStack title="Citas Pendientes">
        {asociado.map((appt, index) => (
          <CustomTile key={index} title={appt.title}>
            <Text size="md"> Dirección: {appt.direccion} </Text>
            <Text size="md"> Numero del edificio: {appt.numeroEdificio} </Text>
            <Text size="md"> Telefono: {appt.telefono} </Text>
          </CustomTile>
        ))}
      </CustomStack>
    </div>
  );
};

export default SamplePage;
