import React from "react";
import EmployeeProfileForm from "../../../components/employee-menu/profile/EmployeeProfileForm";

const getData = async () => {
  //const res = await fetch(route);
  const res = {
    name: "Elton Tito",
    email: "example@contoso.com",
    phone: "6462537892",
    password: "ricardomilos",
    birthDate: 1701388800000,
    address: "Colonita",
    license: "Licencia medica",
  };
  return res;
};

const EmployeeProfilePage = async () => {
  const profile = await getData();
  return <EmployeeProfileForm profile={profile} />;
};

export default EmployeeProfilePage;
