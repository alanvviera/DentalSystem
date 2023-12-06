import React from "react";
import ClientAppointmentCreateForm from "../ClientAppointmentCreateForm";
import {
  CLINICLIST,
  TYPELISTAPPOINTMENTS,
} from "../../../../constants/constants";
import { headers } from "next/headers";

const getData = async () => {
  //const res = await fetch(`route/${id}`);
  const typeList = [...TYPELISTAPPOINTMENTS];
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/doctorlist`, {
      method: "GET",
      headers: headers(),
    });
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const { doctorList } = await response.json();
    const doctorData = doctorList.map(
      (doctor) => ({label: doctor.user_data.name + " " + doctor.user_data.last_name, value: doctor.id_doctor})
    );

    const response2 = await fetch(
      `${process.env.NEXTAUTH_URL}/api/cliniclist`,
      {
        method: "GET",
        headers: headers(),
      }
    );
    if (!response2.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const { doctorList: clinicData } = await response2.json();
    const clinicList = clinicData.map((clinic) => ({label: clinic.name, value: clinic.id_local}));

    return { clinicList, typeList, doctorData};
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};

const ClientAppointmentCreate = async () => {
  const { clinicList, typeList, doctorData} =
    await getData();
  return (
    <main style={{ marginLeft: "20px", marginRight: "20px" }}>
      <ClientAppointmentCreateForm
        doctorList={doctorData}
        clinicList={clinicList}
        typeList={typeList}
      />
    </main>
  );
};

export default ClientAppointmentCreate;
