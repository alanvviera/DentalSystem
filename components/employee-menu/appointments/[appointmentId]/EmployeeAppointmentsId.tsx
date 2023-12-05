import React from "react";
import EmployeeAppointmentView from "../EmployeeAppointmentView";
import { CLINICLIST, TYPELISTAPPOINTMENTS } from "../../../../constants/constants";

const getData = async (id: number) => {
  //const res = await fetch(`route/${id}`);
  const appointment = {
    id_appointments: id,
    client_name: "Adrian Velez",
    local_name: "Bienestar dental",
    type: "Tratamiento de caries",
    doctor_name: "Antonio Jesus Caparros",
    date: 1703051982000,
    hour: new Date(18000000).getTime(),
    subject: "Paciente asignado al doctor Antonio Jesús Caparros en el consultorio 8",
    status: "Pendiente",
  }
  const clinicList = CLINICLIST;
  const typeList = TYPELISTAPPOINTMENTS;

  const res = { appointment, clinicList, typeList }

  return res;
}

export default async function EmployeeAppointmentId({ params }: { params: { appointmentId: number } }) {
  const { appointment, clinicList, typeList } = await getData(params.appointmentId);
  return <EmployeeAppointmentView appointment={appointment} clinicList={clinicList} typeList={typeList} />
}
