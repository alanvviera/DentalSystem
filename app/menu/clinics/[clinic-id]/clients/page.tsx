import React from 'react'
import ClinicEmployeesRegister from '../../../../../components/employee-menu/clinics/[clinic-id]/employees/register/ClinicEmployeesRegister';
import ClinicsEmployee from '../../../../../components/employee-menu/clinics/[clinic-id]/employees/ClinicsEmployee';
import ClientsAll from '../../../../../components/employee-menu/clinics/[clinic-id]/clients/ClientsAll';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';
import SkeletonForm from '../../../../../components/custom-skeleton/SkeletonForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../api/auth/[...nextauth]/route';


const page = async ({ params }) => {

    const clinicId = params["clinic-id"];
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;


    if (typeUser === "EMPLOYEE" || typeUser === "DOCTOR") {
        return <ClientsAll clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;