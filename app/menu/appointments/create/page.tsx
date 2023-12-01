import React from 'react'
import EmployeeAppointmentsCreate from '../../../../components/employee-menu/appointments/create/EmployeeAppointmentsCreate';
import ClientAppointmentCreate from '../../../../components/client-menu/appointments/create/ClientAppointmentCreate';
import fakeTypeUser from '../../../../constants/fakeTypeUser';

const page = () => {
    

    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointmentsCreate />
    }
    else {
        return <ClientAppointmentCreate  />
    }

}

export default page;