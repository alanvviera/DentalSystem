import React from "react";
import TilesSection from "../../../components/tiles-viewer/TileSection";
import CustomStack from "../../../components/tiles-viewer/CustomStack";
import CustomTile from "../../../components/tiles-viewer/CustomTile";
import { Button, Group, Text, Title } from "@mantine/core";
import { PlusOutlined } from "@ant-design/icons";

type Appointment = {
  id: number;
  client_name: string;
  date: string;
  hour: string;
};

const getData = async () => {
  /*
  const pendingData = await fetch(route);
  const completedData = await fetch(route);
  const inProgressData = await fetch(route);
  */
  const pendingData: Appointment[] = [
    {
      id: 1,
      client_name: "Jose Arturo Castro Jimenez",
      date: "2023-11-17",
      hour: "15:30",
    },
    {
      id: 4,
      client_name: "Alice Johnson",
      date: "2023-11-17",
      hour: "12:20",
    },
    {
      id: 7,
      client_name: "Daniel Brown",
      date: "2023-11-20",
      hour: "11:15",
    },
    {
      id: 10,
      client_name: "Alexander White",
      date: "2023-11-23",
      hour: "17:30",
    },
  ];
  const completedData: Appointment[] = [
    {
      id: 2,
      client_name: "Maria Rodriguez",
      date: "2023-11-15",
      hour: "10:00",
    },
    {
      id: 5,
      client_name: "Carlos Sanchez",
      date: "2023-11-18",
      hour: "09:30",
    },
    {
      id: 8,
      client_name: "Sophia Davis",
      date: "2023-11-21",
      hour: "13:45",
    },
  ];
  const inProgressData: Appointment[] = [
    {
      id: 3,
      client_name: "John Smith",
      date: "2023-11-16",
      hour: "14:45",
    },
    {
      id: 6,
      client_name: "Laura Martinez",
      date: "2023-11-16",
      hour: "16:00",
    },
    {
      id: 9,
      client_name: "Emma Wilson",
      date: "2023-11-16",
      hour: "08:45",
    },
  ];

  const pending = pendingData;
  const completed = completedData;
  const inProgress = inProgressData;
  return { pending, completed, inProgress };
};

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
      parseInt(hourA[0]) - parseInt(hourB[0]) ||
      parseInt(hourA[1]) - parseInt(hourB[1])
    );
  }
};

const viewAppointments = (appt: Appointment) => (
  <CustomTile
    key={appt.id}
    baseLink={`/menu/appointments/${appt.id}`}
    title={appt.client_name}
    topRightText={`${new Date(appt.date).toLocaleDateString("es-mx", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })} - ${appt.hour}`}
  />
);

const EmployeeAppointments = async () => {
  const { pending, completed, inProgress } = await getData();
  pending.sort(compareAppointments);
  inProgress.sort(compareAppointments);
  completed.sort(compareAppointments).reverse();
  return (
    <main style={{ margin: "20px" }}>
      <Group justify="space-between">
        <Title>Citas</Title>
        <Button
          leftSection={<PlusOutlined />}
          component="a"
          href="/menu/appointments/create"
        >
          Agregar
        </Button>
      </Group>
      <TilesSection title="En curso" />
      {inProgress.length > 0 ? (
        <CustomStack>
          {inProgress.map((appt) => viewAppointments(appt))}
        </CustomStack>
      ) : (
        <Text size="xl" fw={500} ml={10} c="gray.7">
          No hay citas en curso
        </Text>
      )}
      <TilesSection title="Pendientes" />
      {pending.length > 0 ? (
        <CustomStack>
          {pending.map((appt) => viewAppointments(appt))}
        </CustomStack>
      ) : (
        <Text size="xl" fw={500} ml={10} c="gray.7">
          No hay citas pendientes
        </Text>
      )}
      <TilesSection title="Completadas" />
      {completed.length > 0 ? (
        <CustomStack>
          {completed.map((appt) => viewAppointments(appt))}
        </CustomStack>
      ) : (
        <Text size="xl" fw={500} ml={10} c="gray.7">
          Sin citas
        </Text>
      )}
    </main>
  );
};

export default EmployeeAppointments;
