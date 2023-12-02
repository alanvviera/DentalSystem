import React from 'react'
import ClientDebtId from '../../../../components/client-menu/debt/[debtId]/ClientDebtId';
import fakeTypeUser from '../../../../constants/fakeTypeUser';



const page = () => {
    const typeUser = fakeTypeUser;

    if (typeUser === "CLIENT") {
        return <ClientDebtId />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;