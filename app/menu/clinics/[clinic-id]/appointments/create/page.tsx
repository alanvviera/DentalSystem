import React from 'react'
import ClinicAppointmentCreate from '../../../../../../components/employee-menu/clinics/[clinic-id]/appointments/create/ClinicAppointmentCreate';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <ClinicAppointmentCreate clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;