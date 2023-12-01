import React from 'react'
import ClinicsAll from '../../../components/employee-menu/clinics/ClinicsAll';
import fakeTypeUser from '../../../constants/fakeTypeUser';


const page = () => {
    
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <ClinicsAll />
    }
    else {
        return <p>No tiene acceso a esta pagina</p>
    }

}

export default page;