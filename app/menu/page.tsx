import EmployeeMenu from '../../components/employee-menu/EmployeeMenu';
import fakeTypeUser from '../../constants/fakeTypeUser';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import ClientMenu from '../../components/client-menu/ClientMenu';
import { cookies } from 'next/headers';

const page = () => {
    const typeUser = getCookie("userType", { cookies });
    if (typeUser === "EMPLOYEE") {
        return <EmployeeMenu />
    }
    else {
        return <ClientMenu />
    }

}

export default page;