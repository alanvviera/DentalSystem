import React from 'react'
import ClientId from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/[client-id]/ClientId';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClientId clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;