import React from 'react'
import EmployeeProfile from '../../../components/employee-menu/profile/EmployeeProfile';
import ClientProfile from '../../../components/client-menu/profile/ClientProfile';
import fakeTypeUser from '../../../constants/fakeTypeUser';


const page = () => {
    
    const typeUser = fakeTypeUser;

    if (typeUser === "EMPLOYEE") {
        return <EmployeeProfile />
    }
    else {
        return <ClientProfile />
    }

}

export default page;