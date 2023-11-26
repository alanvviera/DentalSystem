import AppointmentCard from "../../../components/dashboard2/AppointmentCard";
import CustomCard from "../../../components/dashboard2/CustomCard";
import CustomTable from "../../../components/dashboard2/CustomTable";
import PendingAppointmentCard from "../../../components/dashboard2/PendingAppointmentsCard";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Item = {
  nombre: string;
  hora: string;
  concepto: string;
  
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
  
    
  
    return (
      <div>
        
        <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
          <GridCol  span={{ base: 12, sm: 6, lg: 12  }}>
            <AppointmentCard baseLink="/client-menu/appointments" itemId="position" addButtonLink="/client-menu/appointments/create" headers={headers} items={items} />
          </GridCol>
        </Grid>
      </div>
    );
  };
  
  export default Page;

