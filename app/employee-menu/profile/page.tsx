import React from "react";
import EmployeeProfileForm from "../../../components/employee-menu/profile/EmployeeProfileForm";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/auth/employee/1');

  // const res = {
  //   name: "Elton Tito",
  //   email: "example@contoso.com",
  //   phone: "6462537892",
  //   password: "ricardomilos",
  //   birthDate: 1701388800000,
  //   address: "Colonita",
  //   license: "Licencia medica",
  // };
  
  return res.json();
};

const EmployeeProfilePage = async () => {
  const data = await getData();
  
  const {patientNumber, patientName, email, phoneNumber, patientPassword, birthday, address, license, gender} = data;

  const profile = {
      name: patientName,
      email: email,
      phone: phoneNumber,
      password: patientPassword,
      birthDate: birthday,
      address: address,
      license: license,
  }

  return <EmployeeProfileForm profile={profile} />;
};

export default EmployeeProfilePage;
