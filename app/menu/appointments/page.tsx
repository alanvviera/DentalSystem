import React from 'react'
import ClientAppointments from '../../../components/client-menu/appointments/ClientAppointments';
import EmployeeAppointments from '../../../components/employee-menu/appointments/page';
import fakeTypeUser from '../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../components/custom-skeleton/SkeletonForm';

const page = async () => {

    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE") {
        return <EmployeeAppointments />
    }
    else {
        return <ClientAppointments />
    }

}

export default page;