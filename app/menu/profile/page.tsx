import React from 'react'
import EmployeeProfile from '../../../components/employee-menu/profile/EmployeeProfile';
import ClientProfile from '../../../components/client-menu/profile/ClientProfile';
import SkeletonForm from '../../../components/custom-skeleton/SkeletonForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

const page = async () => {

    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE" || typeUser === "DOCTOR") {
        return <EmployeeProfile />
    }
    else {
        return <ClientProfile />
    }

}

export default page;