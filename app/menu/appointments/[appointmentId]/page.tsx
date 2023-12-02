import React from 'react'
import EmployeeAppointmentId from '../../../../components/employee-menu/appointments/[appointmentId]/EmployeeAppointmentsId';
import ClientAppointmentDetails from '../../../../components/client-menu/appointments/[appointmentId]/ClientAppointmentDetails';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from "next/headers"

const page = ({ params }) => {
    const typeUser = getCookie("userType", { cookies });
    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointmentId params={{ appointmentId: params.id }} />
    }
    else {
        return <ClientAppointmentDetails />
    }

}

export default page;