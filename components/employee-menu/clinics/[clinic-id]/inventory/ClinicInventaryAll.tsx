import React from 'react'
import { Button, Group, Title } from "@mantine/core";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import TableInventory from '../../../../tables/employee-menu/clinic/inventory/TableInventory';

const getData = async () => {

    return [
        {
            id: "dkjNehujf",
            name: "Cloroquina",
            acquisitionDate: "1700436088000",
            expirationDate: "1731532841",
            cost: 75.56,
            stock: 25,

        },
        {
            id: "200dsajn2xall4",
            name: "Parecetamol",
            acquisitionDate: "1699744888000",
            expirationDate: "1763068841",
            cost: 10.56,
            stock: 36,

        },
        {
            id: "fmk23xlp2l3",
            name: "Amoxicilina",
            acquisitionDate: "1642461688000",
            expirationDate: "1708118441",
            cost: 16.59,
            stock: 2,

        }
    ]
}


const ClinicInventaryAll = async ({clinicId}) => {
    // const clinicId = params["clinic-id"];
    const dataExampleFromServer = await getData();

    const headers = [
        "ID",
        "Medicamento",
        "Fecha de adquisición",
        "Fecha de vencimiento",
        "Costo",
        "Stock"
    ]

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}`} >
                Volver a clínica
            </Button>
            <Group justify='space-between'>
                <Title>Inventario</Title>
                <Button leftSection={<PlusOutlined />} component='a' href={`/menu/clinics/${clinicId}/inventory/add`}>
                    Agregar
                </Button>
            </Group>
            <TableInventory headers={headers} elements={dataExampleFromServer} />
        </main>
    )
}

export default ClinicInventaryAll