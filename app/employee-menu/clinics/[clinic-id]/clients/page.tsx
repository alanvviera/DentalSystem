import React from 'react'
import { Button, Group, Title } from "@mantine/core";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import TableClinicClients from '../../../../../components/tables/employee-menu/clinic/clients/TableClinicClients';

const getData = async () => {

    return [
        {
            id: "daikpjdkoman",
            name: "Bob esponja",
            tel: "646-127-78-95",
            email: "bobesponja56@gmail.com"


        },
        {
            id: "o2m3i29mc9f3252",
            name: "Patricio estrella",
            tel: "664-187-54-32",
            email: "mar13@hotmail.com"
        },
        {
            id: "0123mmb694cad304onn",
            name: "Don cangrejo",
            tel: "662-154-56-85",
            email: "d1nero56@gmail.com"

        }
    ]
}


const InventoryPage = async ({params}) => {
    const clinicId = params["clinic-id"];
    const dataExampleFromServer = await getData();

    const headers = [
        "ID",
        "Nombre",
        "Num tel",
        "Email",
    ]

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href='/employee-menu/clinics' >
                Volver a clinicas
            </Button>
            <Group justify='space-between'>
                <Title>Clientes</Title>
                <Button leftSection={<PlusOutlined />} component='a' href={`/employee-menu/clinics/${clinicId}/inventory/add`}>
                    Agregar
                </Button>
            </Group>
            <TableClinicClients headers={headers} elements={dataExampleFromServer} />
        </main>
    )
}

export default InventoryPage