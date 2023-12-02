import React from 'react'
import ClinicProfile from '../../../../../components/employee-menu/clinics/[clinic-id]/profile/ClinicProfile';
import fakeTypeUser from '../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <ClinicProfile clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;