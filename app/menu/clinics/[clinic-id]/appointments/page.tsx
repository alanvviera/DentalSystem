import React from 'react'
import ClinicId from '../../../../../components/employee-menu/clinics/[clinic-id]/ClinicId';
import ClinicAppointments from '../../../../../components/employee-menu/clinics/[clinic-id]/appointments/ClinicAppointments';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClinicAppointments clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;