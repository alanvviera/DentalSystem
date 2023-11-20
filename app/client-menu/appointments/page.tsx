import AppointmentCard from "../../../components/dashboard2/AppointmentCard";
import CustomCard from "../../../components/dashboard2/CustomCard";
import CustomTable from "../../../components/dashboard2/CustomTable";
import PendingAppointmentCard from "../../../components/dashboard2/PendingAppointmentsCard";
import { Grid, GridCol, Text } from "@mantine/core";
import React from "react";

type Item = {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }
  
const Page = () => {
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
        
        <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "xl" }}>
          <GridCol  span={{ base: 12, sm: 6, lg: 12  }}>
            <AppointmentCard baseLink="/client-menu/appointments" itemId="position" headers={headers} items={items} />
          </GridCol>
        </Grid>
      </div>
    );
  };
  
  export default Page;

