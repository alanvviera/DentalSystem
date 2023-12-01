import React from 'react'
import EmployeeAppointmentId from '../../../../components/employee-menu/appointments/[appointmentId]/EmployeeAppointmentsId';
import ClientAppointmentDetails from '../../../../components/client-menu/appointments/[appointmentId]/ClientAppointmentDetails';
import fakeTypeUser from '../../../../constants/fakeTypeUser';

const page = () => {
    

    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointmentId params={{ appointmentId: 1 }} />
    }
    else {
        return <ClientAppointmentDetails />
    }

}

export default page;