import AppointmentCard from "../../components/dashboard2/AppointmentCard";
import DebtCard from "../../components/dashboard2/DebtCard";
import ProfileBanner from "../../components/dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Appoint = {
  descripcion?: string;
  fecha: string;
  hora: string;
  doctor: string;
}

type DebtData = {
  debt: number;
  date: string;

}

const Page = () => {
  const headers = ["Tipo de cita", "Fecha", "Hora", "Doctor Asignado"];
  const citas: Appoint[] = [
    { descripcion: "Valoración ortodoncia", fecha: "2023-11-25", hora: "10:30", doctor: "Eladio Carreon"},
  ];

  const debtData: DebtData = {
    debt: 3405,
    date: "2023-02-04",
  };

  return (
    <div>
      <ProfileBanner title={`Bienvenido, usuario`} description="" showAvatar avatarImageUrl={null} showSettingsButton settingsLink="/client-menu/profile">
      
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
        <GridCol span={{ base: 12, sm: 12, lg: 4 }}>
          <DebtCard data={debtData} moreButtonLink="client-menu/debt" />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <AppointmentCard baseLink="/client-menu/appointments" moreButtonLink="/client-menu/appointments" addButtonLink="/client-menu/appointments/create" itemId="position" headers={headers} items={citas} />
        </GridCol>
      </Grid>
    </div>
  );
};

export default Page;