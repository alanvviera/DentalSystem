import React from 'react'
import ClientDashboard from '../../../components/client-menu/dashboard/ClientDashboard';
import fakeTypeUser from '../../../constants/fakeTypeUser';


const page = () => {
    const typeUser = fakeTypeUser;



    if (typeUser === "CLIENT") {
        return <ClientDashboard />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;