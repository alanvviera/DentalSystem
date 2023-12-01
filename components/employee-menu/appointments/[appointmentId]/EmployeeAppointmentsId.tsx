import React from "react";
import EmployeeAppointmentView from "../EmployeeAppointmentView";

const getData = async (id: number) => {
  //const res = await fetch(`route/${id}`);
  const appointment = {
    id_appointments: id,
    client_name: "Ricardo arjona",
    local_name: "Clinica sin dientes",
    type: "Extraccion de muelas",
    doctor_name: "Ricardo milos",
    date: "25 de julio del 2023",
    hour: "13:40",
    subject: "Debe de ser atentido por el doctor Similares del consultorio 8",
    status: "Pendiente",
  }
  const clinicList = ["Clinica sin dientes", "Clinica dos"];
  const typeList = ["Extraccion de muelas", "tipo dos"];

  const res = {appointment, clinicList, typeList}

  return res;
}

export default async function EmployeeAppointmentId({ params }: { params: { appointmentId: number } }) {
  const {appointment, clinicList, typeList} = await getData(params.appointmentId);
  return <EmployeeAppointmentView appointment={appointment} clinicList={clinicList} typeList={typeList} />
}
