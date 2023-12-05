import React from 'react'
import ClientId from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/[client-id]/ClientId';
import ClinicEmployeesId from '../../../../../../components/employee-menu/clinics/[clinic-id]/employees/[employee-id]/ClinicEmployeesId';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../../../../components/custom-skeleton/SkeletonForm';


const page = async ({ params }) => {

    const clinicId = params["clinic-id"];
    const employeeId = params["employee-id"]
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE") {
        return <ClinicEmployeesId clinicId={clinicId} employeeId={employeeId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;