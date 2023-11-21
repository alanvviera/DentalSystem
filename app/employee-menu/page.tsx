import AppointmentCard from "../../components/dashboard2/AppointmentCard";
import ClinicsCard from "../../components/dashboard2/ClinicsCard";
import PendingAppointmentsCard from "../../components/dashboard2/PendingAppointmentsCard";
import ProfileBanner from "../../components/dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Item = {
  position: number;
  mass: number;
  symbol: string;
  name: string;
}
type User = {
  name: string;
  email: string;
  role: string;
}
const Page = () => {
  const user: User = {name: "Elton tito", email: "example@contoso.com", role: "Doctor"};
  const {name, email, role} = user
  const headers = ["Element position", "Element name", "Symbol", "Atomic"];
  const items: Item[] = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  return (
    <div>
      <ProfileBanner title={`${name}`} description={`${role} - ${email} `} showAvatar avatarImageUrl={null} showSettingsButton settingsLink="/employee-menu/profile">
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "lg" }}>
        <GridCol span={{ base: 12, md: 12, lg: 6 }}>
          <AppointmentCard headers={headers} items={items} baseLink="/employee-menu/appointments" itemId="position" moreButtonLink="/employee-menu/appointments" addButtonLink="/employee-menu/appointments/create"/>
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <ClinicsCard headers={headers} items={items} baseLink="/employee-menu/clinics" itemId="position" moreButtonLink="/employee-menu/clinics" addButtonLink="/employee-menu/clinics/register"/>
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 12 }}>
          <PendingAppointmentsCard headers={headers} items={items} baseLink="/employee-menu/appointments" itemId="position"  moreButtonLink="/employee-menu/appointments"/>
        </GridCol>
      </Grid>
    </div>
  );
};

export default Page;