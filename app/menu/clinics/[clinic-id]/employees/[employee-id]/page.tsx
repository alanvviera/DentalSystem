import React from 'react'
import ClientId from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/[client-id]/ClientId';
import ClinicEmployeesId from '../../../../../../components/employee-menu/clinics/[clinic-id]/employees/[employee-id]/ClinicEmployeesId';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const employeeId = params["employee-id"]
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <ClinicEmployeesId clinicId={clinicId} employeeId={employeeId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;