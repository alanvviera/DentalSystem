import React from "react";
import TilesSection from "../../../components/tiles-viewer/TileSection";
import CustomStack from "../../../components/tiles-viewer/CustomStack";
import CustomTile from "../../../components/tiles-viewer/CustomTile";
import { Button, Group, Text, Title } from "@mantine/core";
import { PlusOutlined } from "@ant-design/icons";

type Appointment = {
  id: number;
  patient_name: string;
  date_of_date: string;
  appointment_time: string;
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
      patient_name: "Jose Arturo Castro Jimenez",
      date_of_date: "2023-11-17",
      appointment_time: "15:30",
    },
    {
      id: 4,
      patient_name: "Alice Johnson",
      date_of_date: "2023-11-17",
      appointment_time: "12:20",
    },
    {
      id: 7,
      patient_name: "Daniel Brown",
      date_of_date: "2023-11-20",
      appointment_time: "11:15",
    },
    {
      id: 10,
      patient_name: "Alexander White",
      date_of_date: "2023-11-23",
      appointment_time: "17:30",
    },
  ];
  const completedData: Appointment[] = [
    {
      id: 2,
      patient_name: "Maria Rodriguez",
      date_of_date: "2023-11-15",
      appointment_time: "10:00",
    },
    {
      id: 5,
      patient_name: "Carlos Sanchez",
      date_of_date: "2023-11-18",
      appointment_time: "09:30",
    },
    {
      id: 8,
      patient_name: "Sophia Davis",
      date_of_date: "2023-11-21",
      appointment_time: "13:45",
    },
  ];
  const inProgressData: Appointment[] = [
    {
      id: 3,
      patient_name: "John Smith",
      date_of_date: "2023-11-16",
      appointment_time: "14:45",
    },
    {
      id: 6,
      patient_name: "Laura Martinez",
      date_of_date: "2023-11-16",
      appointment_time: "16:00",
    },
    {
      id: 9,
      patient_name: "Emma Wilson",
      date_of_date: "2023-11-16",
      appointment_time: "08:45",
    },
  ];

  const pending = pendingData;
  const completed = completedData;
  const inProgress = inProgressData;
  return { pending, completed, inProgress };
};

const compareAppointments = (a: Appointment, b: Appointment): number => {
  const dateA: Date = new Date(a.date_of_date);
  const dateB: Date = new Date(b.date_of_date);

  if (dateA.getTime() !== dateB.getTime()) {
    return dateA.getTime() - dateB.getTime();
  } else {
    // Si las fechas son iguales, ordenar por 'hour'
    const hourA: string[] = a.appointment_time.split(":");
    const hourB: string[] = b.appointment_time.split(":");

    return (
      parseInt(hourA[0]) - parseInt(hourB[0]) ||
      parseInt(hourA[1]) - parseInt(hourB[1])
    );
  }
};

const viewAppointments = (appt: Appointment) => (
  <CustomTile
    key={appt.id}
    baseLink={`/employee-menu/appointments/${appt.id}`}
    title={appt.patient_name}
    topRightText={`${new Date(appt.date_of_date).toLocaleDateString("es-mx", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })} - ${appt.appointment_time}`}
  />
);

const AppointmentsPage = async () => {
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
          href="/employee-menu/appointments/create"
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

export default AppointmentsPage;
