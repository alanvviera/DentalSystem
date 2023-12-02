import React from 'react'
import ClientAppointments from '../../../components/client-menu/appointments/ClientAppointments';
import EmployeeAppointments from '../../../components/employee-menu/appointments/page';
import fakeTypeUser from '../../../constants/fakeTypeUser';

const page = () => {
    
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointments />
    }
    else {
        return <ClientAppointments />
    }

}

export default page;