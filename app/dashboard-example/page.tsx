import AppointmentCard from "../../components/dashboard2/AppointmentCard";
import CustomCard from "../../components/dashboard2/CustomCard";
import CustomTable from "../../components/dashboard2/CustomTable";
import DebtCard from "../../components/dashboard2/DebtCard";
import PendingAppointmentsCard from "../../components/dashboard2/PendingAppointmentsCard";
import ProfileBanner from "../../components/dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

interface Item {
  position: number;
  mass: number;
  symbol: string;
  name: string;
}

interface DebtData {
  debt: number;
  date: string;
}

const Page: React.FC = () => {
  const headers = ["Element position", "Element name", "Symbol", "Atomic"];
  const items: Item[] = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const debtData: DebtData = {
    debt: 3405,
    date: "2023-02-04",
  };

  return (
    <div>
      <ProfileBanner title={`Bienvenido, usuario`} description="Aqui va una pequeña descripcion..." showAvatar avatarImageUrl={null} showSettingsButton>
      <CustomCard title="Tabla ejemplo">
          <CustomTable items={items} headers={headers} />
        </CustomCard>
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
        <GridCol span={{ base: 12, sm: 12, lg: 4 }}>
          <DebtCard data={debtData} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <AppointmentCard headers={headers} items={items} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 12 }}>
          <PendingAppointmentsCard headers={headers} items={items} />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 12 }}>

        <CustomCard title="Clientes" showMoreButton moreButtonPosition="top" showAddButton />
        
        </GridCol>
      </Grid>
    </div>
  );
};

export default Page;