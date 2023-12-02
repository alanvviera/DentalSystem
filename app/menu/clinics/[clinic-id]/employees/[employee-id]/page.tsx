import React from 'react'
import ClientId from '../../../../../../components/employee-menu/clinics/[clinic-id]/clients/[client-id]/ClientId';
import ClinicEmployeesId from '../../../../../../components/employee-menu/clinics/[clinic-id]/employees/[employee-id]/ClinicEmployeesId';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const employeeId = params["employee-id"]
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClinicEmployeesId clinicId={clinicId} employeeId={employeeId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;