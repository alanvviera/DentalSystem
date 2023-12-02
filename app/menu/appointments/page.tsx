import ClientAppointments from '../../../components/client-menu/appointments/ClientAppointments';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import EmployeeAppointments from '../../../components/employee-menu/appointments/page';
import { cookies } from 'next/headers'

const page = () => {
    const typeUser = getCookie("userType", { cookies });
    console.log(typeUser);
    if (typeUser === "EMPLOYEE"){
        return <EmployeeAppointments />
    }
    else {
        return <ClientAppointments />
    }

}

export default page;