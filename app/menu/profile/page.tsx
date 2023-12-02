import React from 'react'
import EmployeeProfile from '../../../components/employee-menu/profile/EmployeeProfile';
import ClientProfile from '../../../components/client-menu/profile/ClientProfile';
import fakeTypeUser from '../../../constants/fakeTypeUser';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';

const page = () => {
    
    const typeUser = getCookie("userType", { cookies });

    if (typeUser === "EMPLOYEE") {
        return <EmployeeProfile />
    }
    else {
        return <ClientProfile />
    }

}

export default page;