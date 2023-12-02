import React from 'react'
import ClientMedicalHistoryId from '../../../../components/client-menu/medicalHistory/[medicalHistoryId]/page';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = () => {
    const typeUser = getCookie("userType", { cookies });
    if (typeUser !== "EMPLOYEE") {
        return <ClientMedicalHistoryId />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }
}

export default page;