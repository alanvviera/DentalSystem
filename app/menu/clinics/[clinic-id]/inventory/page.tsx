import React from 'react'
import ClinicInventaryAll from '../../../../../components/employee-menu/clinics/[clinic-id]/inventory/ClinicInventaryAll';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <ClinicInventaryAll clinicId={clinicId}  />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;