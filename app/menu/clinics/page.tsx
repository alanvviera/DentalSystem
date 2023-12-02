import React from 'react'
import ClinicsAll from '../../../components/employee-menu/clinics/ClinicsAll';
import fakeTypeUser from '../../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const page = () => {
    
    const typeUser = getCookie("userType", { cookies });
    if (typeUser === "EMPLOYEE") {
        return <ClinicsAll />
    }
    else {
        return <p>No tiene acceso a esta página.</p>
    }

}

export default page;