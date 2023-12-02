import React from 'react'
import ClinicAppointmentCreate from '../../../../../../components/employee-menu/clinics/[clinic-id]/appointments/create/ClinicAppointmentCreate';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <ClinicAppointmentCreate clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;