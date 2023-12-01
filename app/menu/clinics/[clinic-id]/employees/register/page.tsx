import React from 'react'
import ClinicEmployeesRegister from '../../../../../../components/employee-menu/clinics/[clinic-id]/employees/register/ClinicEmployeesRegister';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <ClinicEmployeesRegister clinicId={clinicId} />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;