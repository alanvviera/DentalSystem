import React from 'react'
import { useRouter } from 'next/navigation';

import ClinicAppointmentId from '../../../../../../components/employee-menu/clinics/[clinic-id]/appointments/[appointment-id]/ClinicAppointmentId';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import {cookies} from 'next/headers'


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const appointmentId = params["appointment-id"];
    const typeUser = getCookie("userType", { cookies });


    if (typeUser === "EMPLOYEE") {
        return <ClinicAppointmentId clinicId={clinicId} appointmentId={appointmentId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;