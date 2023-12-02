import AppointmentCard from "../dashboard2/AppointmentCard";
import DebtCard from "../dashboard2/DebtCard";
import ProfileBanner from "../dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

const getData = async () => {
  try {
    const response = await fetch(`/alt-api/client-dashboard/`);
    if (response.ok) {
      console.log(await response.json());
    } else {
      const responseData = await response.json();
      console.error("Fetch data error:", responseData);
    }
  } catch (error) {
    console.error("Request error:", error);
  }
}

const ClientMenu = async () => {
  const headers = ["Tipo de cita", "Fecha", "Hora", "Doctor Asignado"];
  const citas = [
    { descripcion: "Valoración ortodoncia", fecha: "2023-11-25", hora: "10:30", doctor: "Eladio Carreon"},
  ];

  const debtData = {
    debt: 3405,
    date: "2023-02-04",
  };

  return (
    <div>
      <ProfileBanner title={`Bienvenido, usuario`} description="" showAvatar avatarImageUrl={null} showSettingsButton settingsLink="/menu/profile">
      
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
        <GridCol span={{ base: 12, sm: 12, lg: 4 }}>
          <DebtCard data={debtData} moreButtonLink="menu/debt" />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <AppointmentCard baseLink="/menu/appointments" moreButtonLink="/menu/appointments" addButtonLink="/menu/appointments/create" itemId="position" headers={headers} items={citas} />
        </GridCol>
      </Grid>
    </div>
  );
};

export default ClientMenu;