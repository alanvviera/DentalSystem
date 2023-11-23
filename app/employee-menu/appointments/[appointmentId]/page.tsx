import React from "react";
import EmployeeAppointmentView from "../../../../components/employee-menu/employee-appointment-view-page/EmployeeAppointmentView";

const getData = async (id: number) => {
  //const res = await fetch(`route/${id}`);
  const res = {
    id: id,
    patient_name: "Ricardo arjona",
    clinic_name: "Clinica sin dientes",
    type: "Extracíon de muelas",
    doctor_name: "Ricardo milos",
    date_of_date: "25 de julio del 2023",
    appointment_time: "13:40",
    subject: "Debe de ser atentido por el doctor Similares del consultorio 8",
  }
  return res;
}

export default async function EmployeeAppointmentPage({ params }: { params: { appointmentId: number } }) {
  const appointment = await getData(params.appointmentId);
  return <EmployeeAppointmentView appointment={appointment} />
}
