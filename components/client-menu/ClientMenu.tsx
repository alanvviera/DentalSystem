/*import { data } from "autoprefixer";
import AppointmentCard from "../dashboard2/AppointmentCard";
import DebtCard from "../dashboard2/DebtCard";
import ProfileBanner from "../dashboard2/ProfileBanner";
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

const ClienMenu = () => {
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

export default ClienMenu;
*/

import React, { useState, useEffect } from "react";
import AppointmentCard from "../dashboard2/AppointmentCard";
import DebtCard from "../dashboard2/DebtCard";
import ProfileBanner from "../dashboard2/ProfileBanner";
import { Grid, GridCol } from "@mantine/core";


const ClienMenu = () => {
  const headers = ["Tipo de cita", "Fecha", "Hora", "Doctor Asignado"];
  const [dashboardData, setDashboardData] = useState<any>(null); // Usar el tipo correcto si es posible

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/clientdashboard", {
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
  console.log(dashboardData);
  return (
    <div>
      <ProfileBanner
        title={`${dashboardData.name}`} // Asegúrate de tener la propiedad correcta
        description={`${dashboardData.email}`}
        showAvatar
        avatarImageUrl={null}
        showSettingsButton
        settingsLink="/menu/profile"
      ></ProfileBanner>
      <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
        <GridCol span={{ base: 12, sm: 12, lg: 4 }}>
            <DebtCard
              data={{
                debt: 3405,
                date: "2023-12-07",
              }}
              moreButtonLink="menu/debt"
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

export default ClienMenu;