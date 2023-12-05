import React from "react";
import EmployeeProfileForm from "./EmployeeProfileForm";

const getData = async () => {
  //const res = await fetch(route);
  const res = {
    name: "Marcos",
    last_name: "Ojeda",
    email: "marcos12@gmail.com",
    phone: "646-123-59-78",
    password: "password",
    birthDate: 912825761000,
    address: "Bella Vista #12",
    license: "Licencia de Especialidad",
    specialty: "Dermatología",
    school: "Facultad de Ciencias Médicas Avanzadas"
  };
  return res;
};

const EmployeeProfile = async () => {
  const profile = await getData();
  return <EmployeeProfileForm profile={profile} />;
};

export default EmployeeProfile;
