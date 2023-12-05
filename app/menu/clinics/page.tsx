import React from 'react'
import ClinicsAll from '../../../components/employee-menu/clinics/ClinicsAll';
import fakeTypeUser from '../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../components/custom-skeleton/SkeletonForm';


const page =async () => {
    
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "EMPLOYEE") {
        return <ClinicsAll />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;