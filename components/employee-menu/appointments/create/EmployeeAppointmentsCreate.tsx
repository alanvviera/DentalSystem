import React from 'react'
import EmployeeAppointmentCreate from '../EmployeeAppointmentCreate';

const getData = async () => {
  //const res = await fetch(`route/${id}`);
  const clinicList = ["Clinica sin dientes", "Clinica dos"];
  const typeList = ["Extraccion de muelas", "tipo dos"];

  const res = {clinicList, typeList}

  return res;
} 

const EmployeeAppointmentsCreate = async () => {
  const {clinicList, typeList} = await getData();
  return (
    <main style={{marginLeft: "20px", marginRight: "20px"}}>
      <EmployeeAppointmentCreate clinicList={clinicList} typeList={typeList} />
    </main>
  )
}

export default EmployeeAppointmentsCreate