import React from 'react'
import ClientDebtId from '../../../../components/client-menu/debt/[debtId]/ClientDebtId';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import SkeletonForm from '../../../../components/custom-skeleton/SkeletonForm';



const page = async () => {
    const session = await getServerSession(authOptions);
    const { user: { name, email, type_user } } = session;

    if (!session) {
        return <SkeletonForm />
    }

    const typeUser = session.user?.type_user;

    if (typeUser === "CLIENT") {
        return <ClientDebtId />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;