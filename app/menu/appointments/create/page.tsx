import React from 'react'
import EmployeeAppointmentsCreate from '../../../../components/employee-menu/appointments/create/EmployeeAppointmentsCreate';
import ClientAppointmentCreate from '../../../../components/client-menu/appointments/create/ClientAppointmentCreate';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../../components/custom-skeleton/SkeletonForm';

const page = async() => {
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE" || typeUser === "DOCTOR") {
        return <EmployeeAppointmentsCreate />
    }
    else {
        return <ClientAppointmentCreate  />
    }

}

export default page;