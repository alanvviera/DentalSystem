import React from 'react'
import ClientsAll from '../../../../components/employee-menu/clinics/[clinic-id]/clients/ClientsAll';
import ClinicId from '../../../../components/employee-menu/clinics/[clinic-id]/ClinicId';
import fakeTypeUser from '../../../../constants/fakeTypeUser';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';

const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = getCookie("userType", { cookies });


    if (typeUser === "EMPLOYEE") {
        return <ClinicId clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;