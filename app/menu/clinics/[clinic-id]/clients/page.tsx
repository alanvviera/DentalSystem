import React from 'react'
import ClinicEmployeesRegister from '../../../../../components/employee-menu/clinics/[clinic-id]/employees/register/ClinicEmployeesRegister';
import ClinicsEmployee from '../../../../../components/employee-menu/clinics/[clinic-id]/employees/ClinicsEmployee';
import ClientsAll from '../../../../../components/employee-menu/clinics/[clinic-id]/clients/ClientsAll';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <ClientsAll clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;