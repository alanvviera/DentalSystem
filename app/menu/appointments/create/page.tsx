import React from 'react'
import EmployeeAppointmentsCreate from '../../../../components/employee-menu/appointments/create/EmployeeAppointmentsCreate';
import ClientAppointmentCreate from '../../../../components/client-menu/appointments/create/ClientAppointmentCreate';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers'

const page = () => {
    const typeUser = getCookie("userType", { cookies });
    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointmentsCreate />
    }
    else {
        return <ClientAppointmentCreate  />
    }

}

export default page;