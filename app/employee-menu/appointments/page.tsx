import React from 'react'
import TilesSection from '../../../components/tiles-viewer/TileSection';
import CustomStack from '../../../components/tiles-viewer/CustomStack';
import CustomTile from '../../../components/tiles-viewer/CustomTile';
import { ActionIcon, Button, Group, Text, Title } from '@mantine/core';
import { PlusOutlined } from '@ant-design/icons';

type Appointment = {
  id: number;
  client: string;
  date: string;
  hour: string;
}

const getData = () => {
  // Example data
  const pending: Appointment[] = [
    {
      id: 1,
      client: "Jose Arturo Castro Jimenez",
      date: "2023-11-17",
      hour: "15:30",
    },
    {
      id: 4,
      client: "Alice Johnson",
      date: "2023-11-17",
      hour: "12:20",
    },
    {
      id: 7,
      client: "Daniel Brown",
      date: "2023-11-20",
      hour: "11:15",
    },
    {
      id: 10,
      client: "Alexander White",
      date: "2023-11-23",
      hour: "17:30",
    },
  ];
  const completed: Appointment[] = [
    {
      id: 2,
      client: "Maria Rodriguez",
      date: "2023-11-15",
      hour: "10:00",
    },
    {
      id: 5,
      client: "Carlos Sanchez",
      date: "2023-11-18",
      hour: "09:30",
    },
    {
      id: 8,
      client: "Sophia Davis",
      date: "2023-11-21",
      hour: "13:45",
    },
  ];
  const inProgress: Appointment[] = [
    {
      id: 3,
      client: "John Smith",
      date: "2023-11-16",
      hour: "14:45",
    },
    {
      id: 6,
      client: "Laura Martinez",
      date: "2023-11-16",
      hour: "16:00",
    },
    {
      id: 9,
      client: "Emma Wilson",
      date: "2023-11-16",
      hour: "08:45",
    },
  ]
  return {pending, completed, inProgress};
}

const compareAppointments = (a: Appointment, b: Appointment): number => {
  const dateA: Date = new Date(a.date);
  const dateB: Date = new Date(b.date);

  if (dateA.getTime() !== dateB.getTime()) {
    return dateA.getTime() - dateB.getTime();
  } else {
    // Si las fechas son iguales, ordenar por 'hour'
    const hourA: string[] = a.hour.split(":");
    const hourB: string[] = b.hour.split(":");
    
    return (
      parseInt(hourA[0]) - parseInt(hourB[0]) || parseInt(hourA[1]) - parseInt(hourB[1])
    );
  }
}


const AppointmentsPage = () => {
  const {pending, completed, inProgress} = getData();
  pending.sort(compareAppointments);
  inProgress.sort(compareAppointments);
  completed.sort(compareAppointments).reverse();
  return (
    <main style={{ margin: "20px" }}>
      <Group justify='space-between'>
      <Title>Citas</Title>
      <Button leftSection={<PlusOutlined />} component='a' href='/employee-menu/appointments/create'>
        Agregar
      </Button>
      </Group>
      <TilesSection title="En curso" />
      <CustomStack>
        {inProgress.map((appt: Appointment, index: number) => (
          <CustomTile
            key={index}
            baseLink={`/employee-menu/appointments/${appt.id}`}
            title={appt.client}
            topRightText={
              `${new Date(appt.date).toLocaleDateString('es-mx', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })} - ${appt.hour}`}
          />
        ))}
      </CustomStack>
      <TilesSection title="Pendientes" />
      <CustomStack>
        {pending.map((appt: Appointment, index: number) => (
          <CustomTile
            key={index}
            baseLink={`/employee-menu/appointments/${appt.id}`}
            title={appt.client}
            topRightText={
              `${new Date(appt.date).toLocaleDateString('es-mx', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })} - ${appt.hour}`}
          />
        ))}
      </CustomStack>
      <TilesSection title="Completadas" />
      <CustomStack>
        {completed.map((appt: Appointment, index: number) => (
          <CustomTile
            key={index}
            baseLink={`/employee-menu/appointments/${appt.id}`}
            title={appt.client}
            topRightText={
              `${new Date(appt.date).toLocaleDateString('es-mx', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })} - ${appt.hour}`}
          />
        ))}
      </CustomStack>
    </main>
  )
}

export default AppointmentsPage