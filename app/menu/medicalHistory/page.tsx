import React from 'react'
import ClientDashboard from '../../../components/client-menu/dashboard/ClientDashboard';
import ClientDebt from '../../../components/client-menu/debt/ClientDebt';
import ClientMedicalHistory from '../../../components/client-menu/medicalHistory/page';
import fakeTypeUser from '../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = () => {
    const typeUser = getCookie("userType", { cookies });

    if (typeUser !== "EMPLOYEE") {
        return <ClientMedicalHistory />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;