"use client";
import { Title } from '@mantine/core';
import VisualizeData from "../../../components/visualize-data/VisualizeData";
import LabelDataText from "../../../components/visualize-data/labelsData/LabelDataText";
import { useRouter } from 'next/navigation';


const ClinicPage = () => {

    const router = useRouter();

    const clinicId = "1"; //This is clinic ID

    return (
        <main style={{ margin: "20px" }}>
            <VisualizeData
                content={
                    <>
                        <Title>Clinica</Title>
                        <LabelDataText title='Ve la información de tu clinica' type='Información personal' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/employee-menu/clinics/${clinicId}`)} order={6} >Editar</Title>} />
                        <LabelDataText title='Ve el personal de tu clinica' type='Personal' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/employee-menu/clinics/${clinicId}/employees`)} order={6} >Ver mas</Title>} />
                        <LabelDataText title='Manera tu inventario' type='Inventario' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/employee-menu/clinics/${clinicId}/inventory`)} order={6} >Ver mas</Title>} />
                        <LabelDataText title='Administra a tus clientes' type='Clientes' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/employee-menu/clinics/${clinicId}/clients`)} order={6} >Ver mas</Title>} />
                        <LabelDataText title='Ve las citas pendientes' type='Pendientes' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/employee-menu/clinics/${clinicId}/appointments`)} order={6} >Ver mas</Title>} />
                    </>
                }
            />
        </main>
    )
}

export default ClinicPage;
