import React from 'react'
import EmployeeAppointmentId from '../../../../components/employee-menu/appointments/[appointmentId]/EmployeeAppointmentsId';
import ClientAppointmentDetails from '../../../../components/client-menu/appointments/[appointmentId]/ClientAppointmentDetails';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../../components/custom-skeleton/SkeletonForm';

const page = async ({params}) => {

    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;
    const appointmentId = params["appointmentId"];

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE" || typeUser === "DOCTOR") {
        return <EmployeeAppointmentId params={{ appointmentId: 1 }} />
    }
    else {
        return <ClientAppointmentDetails appointmentId={appointmentId} />
    }

}

export default page;