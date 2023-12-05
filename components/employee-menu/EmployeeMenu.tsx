import { CLINICLIST } from "../../constants/constants";
import AppointmentCard from "../dashboard2/AppointmentCard";
import ClinicsCard from "../dashboard2/ClinicsCard";
import PendingAppointmentsCard from "../dashboard2/PendingAppointmentsCard";
import ProfileBanner from "../dashboard2/ProfileBanner";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Appointment = {
  id: number;
  client: string;
  type: string;
  date: string;
  hour: string;
}

type Clinic = {
  id: number;
  name: string;
}
type User = {
  name: string;
  email: string;
  role: string;
}

const getData = () => {
  return {
    user: { name: "Usuario uno", email: "example@contoso.com", role: "Doctor" },
    pendingAppointments: [
      { id: 2347, client: "Paulino Casals", type: "Examen dental de rutina", date: "04/01/2024", hour: "10:30" },
      { id: 2677, client: "Carme Acuña", type: "Blanqueamiento dental", date: "20/12/2023", hour: "11:30" },
      { id: 8920, client: "Aurelio Amador", type: "Tratamientos de conducto", date: "16/11/2023", hour: "09:30" },
      { id: 4839, client: "Marino Castaño", type: "Tratamiento de caries", date: "23/10/2023", hour: "14:20" },
      { id: 5931, client: "Debora Arenas", type: "Implantes dentales", date: "19/10/2023", hour: "10:30" }],
    appointments: [
      { id: 2347, client: "Alessandro Tomas", type: "Blanqueamiento dental", date: "04/01/2024", hour: "10:30" },
      { id: 2677, client: "Vicente Jose Tomas", type: "Tratamientos de conducto", date: "20/12/2023", hour: "11:30" },
      { id: 8920, client: "Zoe Sacristan", type: "Tratamientos de conducto", date: "16/11/2023", hour: "09:30" },
      { id: 4839, client: "Emiliano Mir", type: "Tratamiento de caries", date: "23/10/2023", hour: "14:20" },
      { id: 5931, client: "Trinidad Barranco", type: "Colocación de brackets o aparatos ortodónticos", date: "19/10/2023", hour: "10:30" },
    ],
    clinics: CLINICLIST.map((value, index) => {
      return { id: 2347 + index, name: value };
    })
  };
}

const EmployeeMenu = ({ user }) => {
  const { appointments, pendingAppointments, clinics } = getData();
  const { name, email, type_user } = user;

  const topPendingAppointments = pendingAppointments.map((appointment) =>
    ({ id: appointment.id, client: appointment.client, type: appointment.type, date: appointment.date, hour: appointment.hour }));
  const topAppointments = appointments.map((appointment) =>
    ({ id: appointment.id, client: appointment.client, type: appointment.type, date: appointment.date, hour: appointment.hour }));
  const topClinics = clinics.map((clinic) => ({ id: clinic.id, name: clinic.name }));

  const appointmentHeaders = ["Cliente", "Tipo", "Fecha", "Hora"];
  const clinicHeaders = ["Nombre"];

  return (
    <main>
      <ProfileBanner title={`${name}`} description={`${email} `} showAvatar avatarImageUrl={null} showSettingsButton settingsLink="/menu/profile">
      </ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "lg" }}>
        <GridCol span={{ base: 12, md: 6, lg: 12 }}>
          <PendingAppointmentsCard headers={appointmentHeaders} items={topPendingAppointments} baseLink="/menu/appointments" itemId="id" moreButtonLink="/menu/appointments" />
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <AppointmentCard headers={appointmentHeaders} items={topAppointments} baseLink="/menu/appointments" itemId="id" moreButtonLink="/menu/appointments" addButtonLink="/menu/appointments/create" />
        </GridCol>
        <GridCol span={{ base: 12, md: 12, lg: 6 }}>
          <ClinicsCard headers={clinicHeaders} items={topClinics} baseLink="/menu/clinics" itemId="id" moreButtonLink="/menu/clinics" addButtonLink="/menu/clinics/register" />
        </GridCol>
      </Grid>
    </main>
  );
};

export default EmployeeMenu;