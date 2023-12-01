import React from 'react'
import ClinicInventoryId from '../../../../../../components/employee-menu/clinics/[clinic-id]/inventory/[inventory-id]/page';
import fakeTypeUser from '../../../../../../constants/fakeTypeUser';


const page = ({ params }) => {
    
    const clinicId = params["clinic-id"];
    const inventoryId = params["inventory-id"];
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <ClinicInventoryId clinicId={clinicId} inventoryId={inventoryId} />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;