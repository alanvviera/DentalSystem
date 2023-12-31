"use client";
import { Button, Container } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

const EmployeeAppointmentDelete = ({ appointmentId }) => {
  const router = useRouter();
  const deleteAppointment = async (id: string) => {
    //const delete = await fetch(`${route}/${id}`)
    router.push("/menu/appointments");
  };
  return (
    <Container ta="center">
      <Button onClick={async () => await deleteAppointment(appointmentId)}>
        Aceptar
      </Button>
    </Container>
  );
};

export default EmployeeAppointmentDelete;
