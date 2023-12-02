import React from 'react'
import ClinicInventoryId from '../../../../../../components/employee-menu/clinics/[clinic-id]/inventory/[inventory-id]/page';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const inventoryId = params["inventory-id"];
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <ClinicInventoryId clinicId={clinicId} inventoryId={inventoryId} />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;