import React from 'react'
import ClientMedicalHistoryId from '../../../../components/client-menu/medicalHistory/[medicalHistoryId]/page';
import fakeTypeUser from '../../../../constants/fakeTypeUser';


const page = () => {
    const typeUser = fakeTypeUser;



    if (typeUser === "CLIENT") {
        return <ClientMedicalHistoryId />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;