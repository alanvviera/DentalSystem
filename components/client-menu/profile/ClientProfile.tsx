import React from "react";
import ClientProfileForm from "./ClientProfileForm";

const getData = async () => {
  //const res = await fetch(route);
  const res = {
    name: "Usuario uno",
    email: "example@contoso.com",
    phone: "6462537892",
    birthDate: 1701388800000,
    address: "Colonita"
  };
  return res;
};

const EmployeeProfile = async () => {
  const profile = await getData();
  return <ClientProfileForm profile={profile} />;
};

export default EmployeeProfile;