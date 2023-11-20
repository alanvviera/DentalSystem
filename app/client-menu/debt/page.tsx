import React from 'react';
import { Grid, GridCol, Title } from "@mantine/core";
import CustomStack from '../../../components/tiles-viewer/CustomStack';
import CustomTile from '../../../components/tiles-viewer/CustomTile';

type DebtData = {
  debt: number;
  date: string;
}

type Appointment = {
  title: string;
  imageUrl?: string;
  total?: number;
  adeudo?: number;
  fechaHora?: string;
}

const Page = () => {
  const upcomingAppointments: Appointment[] = [
    {
      title: "Jose Arturo Castro Jimenez",
      imageUrl: "url1",
      total: 150,
      adeudo: 50,
      fechaHora: "2023-11-14 15:30",
    },
    {
      title: "Jose Alfrego Gimenez ",
      imageUrl: "url1",
      total: 150,
      adeudo: 50,
      fechaHora: "2023-11-15 16:00",
    },
    {
      imageUrl: "url1",
      title: "Jose Alfrego Gimenez ",
      total: 150,
      adeudo: 50,
    },
  ];

  const debtData: DebtData = {
    debt: 3405,
    date: "2023-02-04",
  };

  // Calcular la suma de los adeudos pendientes
  const sumaAdeudos = upcomingAppointments.reduce((total, appt) => total + (appt.adeudo || 0), 0);

  return (
    <div>
      {/* Texto "Adeudo" más grande y en negritas con el componente Title */}
      <Title order={1} align="center" style={{ color: '#3498db' }}>
        Adeudo
      </Title>
      {/* Mostrar la suma de los adeudos pendientes */}
      <Title order={2} align="center" style={{ color: '#333333' }}>
        {`Total Adeudos: ${sumaAdeudos}`}
      </Title>
      {/* Mostrar las citas pendientes con CustomStack y CustomTile */}
      <Grid>
        {upcomingAppointments.map((appt: Appointment, index: number) => (
          <GridCol span={12} key={index}>
            <CustomTile
              baseLink="#"
              title={appt.title}
              topRightText={appt.fechaHora}
              bottomRightText1={appt.adeudo && `Adeudo: ${appt.adeudo}`}
              bottomRightText2={appt.total && `Total: ${appt.total}`}
            />
          </GridCol>
        ))}
      </Grid>
    </div>
  );
};

export default Page;
