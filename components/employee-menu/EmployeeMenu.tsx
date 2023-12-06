"use client"
import React, { useState, useEffect } from "react";
import AppointmentCard from "../dashboard2/AppointmentCard";
import ProfileBanner from "../dashboard2/ProfileBanner";
import { Grid, GridCol } from "@mantine/core";
import ClinicsCard from "../dashboard2/ClinicsCard";

const EmployeeMenu = ({user}) => {
  const headers = ["Tipo de cita", "Fecha", "Hora", "Doctor Asignado"];
  const [dashboardData, setDashboardData] = useState<any>(null); // Usar el tipo correcto si es posible

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/doctordashboard", {
          method: "GET", // o "POST" si lo prefieres
          headers: {
            "Content-Type": "application/json",
            // Agrega cualquier encabezado adicional que pueda necesitar (como tokens de autorización, etc.)
          },
        });
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setDashboardData(data.dashboardData);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };
    fetchData();
  }, []);

  if (!dashboardData) {
    // Puedes mostrar un indicador de carga mientras se realiza la solicitud
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <ProfileBanner
        title={`${user.name}`} // Asegúrate de tener la propiedad correcta
        description={`${user.email}`}
        showAvatar
        avatarImageUrl={null}
        showSettingsButton
        settingsLink="/menu/profile"
      ></ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
      <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <ClinicsCard
            baseLink="/menu/appointments"
            moreButtonLink="/menu/appointments"
            itemId="id_appointment"
            headers={headers}
            items={dashboardData.clinics}
          />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 8 }}>
          <AppointmentCard
            baseLink="/menu/appointments"
            moreButtonLink="/menu/appointments"
            addButtonLink="/menu/appointments/create"
            itemId="id_appointment"
            headers={headers}
            items={dashboardData.appointments}
          />
        </GridCol>
      </Grid>
    </div>
  );
};

export default EmployeeMenu;