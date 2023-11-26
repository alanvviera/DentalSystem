import AppointmentCard from "../../components/dashboard2/AppointmentCard";
import CustomCard from "../../components/dashboard2/CustomCard";
import CustomTable from "../../components/dashboard2/CustomTable";
import DebtCard from "../../components/dashboard2/DebtCard";
import PendingAppointmentsCard from "../../components/dashboard2/PendingAppointmentsCard";
import ProfileBanner from "../../components/dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Item = {
  nombre: string;
  hora: string;
  concepto: string;
  
}

type DebtData = {
  debt: number;
  date: string;

}

const Page = () => {
  const headers = ["Nombre", "Hora", "Concepto", ""];
  const items: Item[] = [
    { nombre: "Jose Arturo Beltran", hora: "9:15", concepto: "Limpieza Dental" },
    { nombre: "Juan Angel Gimenez", hora: "12:15", concepto: "Extracción" },
    { nombre: "Raul Alonso Jimenez", hora: "13:50", concepto: "Valoración" },
    { nombre: "Guillermo Ochoa", hora: "15:00", concepto: "Endodoncia" },
    { nombre: "Tito Ron", hora: "16:40", concepto: "Valoración" },
  ];

  const debtData: DebtData = {
    debt: 3405,
    date: "2023-02-04",
  };

  return (
    <div>
      <ProfileBanner title={`Bienvenido, usuario`} description="" showAvatar avatarImageUrl={null} showSettingsButton>
      
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
        <GridCol span={{ base: 12, sm: 12, lg: 4 }}>
          <DebtCard data={debtData} moreButtonLink="client-menu/debt" />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <AppointmentCard baseLink="/client-menu/appointments" moreButtonLink="/client-menu/appointments" addButtonLink="/client-menu/appointments/create" itemId="position" headers={headers} items={items} />
        </GridCol>
      </Grid>
    </div>
  );
};

export default Page;