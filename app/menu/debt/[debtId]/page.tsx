import React from 'react'
import ClientDebtId from '../../../../components/client-menu/debt/[debtId]/ClientDebtId';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = () => {
    const typeUser = getCookie("userType", {cookies});
    if (typeUser !== "EMPLOYEE") {
        return <ClientDebtId />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;