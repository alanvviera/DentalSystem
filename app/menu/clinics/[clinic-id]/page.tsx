import React from 'react'
import ClientsAll from '../../../../components/employee-menu/clinics/[clinic-id]/clients/ClientsAll';
import ClinicId from '../../../../components/employee-menu/clinics/[clinic-id]/ClinicId';
import fakeTypeUser from '../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClinicId clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;