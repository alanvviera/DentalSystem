import React from 'react'
import ClinicInventaryAll from '../../../../../components/employee-menu/clinics/[clinic-id]/inventory/ClinicInventaryAll';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <ClinicInventaryAll clinicId={clinicId}  />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;