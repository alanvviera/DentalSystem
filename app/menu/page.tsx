import React from 'react'
import EmployeeMenu from '../../components/employee-menu/EmployeeMenu';
import ClienMenu from '../../components/client-menu/ClientMenu';
import fakeTypeUser from '../../constants/fakeTypeUser';

const page = () => {
    
    const typeUser = fakeTypeUser;


    if (typeUser === "EMPLOYEE") {
        return <EmployeeMenu />
    }
    else {
        return <ClienMenu />
    }

}

export default page;