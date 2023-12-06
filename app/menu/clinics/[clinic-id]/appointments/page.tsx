import React from 'react'
import ClinicId from '../../../../../components/employee-menu/clinics/[clinic-id]/ClinicId';
import ClinicAppointments from '../../../../../components/employee-menu/clinics/[clinic-id]/appointments/ClinicAppointments';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../../../components/custom-skeleton/SkeletonForm';


const page = async ({ params }) => {

    const clinicId = params["clinic-id"];
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }
    const typeUser = session.user?.type_user;


    if (typeUser === "EMPLOYEE" || typeUser === "DOCTOR") {
        return <ClinicAppointments clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;