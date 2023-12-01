import React from 'react'
import ClientDashboard from '../../../components/client-menu/dashboard/ClientDashboard';
import ClientDebt from '../../../components/client-menu/debt/ClientDebt';
import ClientMedicalHistory from '../../../components/client-menu/medicalHistory/page';
import fakeTypeUser from '../../../constants/fakeTypeUser';


const page = () => {
    const typeUser = fakeTypeUser;

    if (typeUser === "CLIENT") {
        return <ClientMedicalHistory />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;