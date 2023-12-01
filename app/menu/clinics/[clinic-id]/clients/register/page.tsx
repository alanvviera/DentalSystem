import React from 'react'
import ClientId from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/[client-id]/ClientId';
import ClientRegister from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/register/ClientRegister';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClientRegister clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;