"use client";
import React from 'react';
import { Button, Group, Title } from "@mantine/core";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import VisualizeData from '../../../../visualize-data/VisualizeData';
import LabelDataText from '../../../../visualize-data/labelsData/LabelDataText';
import { useRouter } from 'next/navigation';

const getData = async ()=>{
return  [
    {
        idEmployee: "dsdaxXe2mmadfasd23",
        name: "Julio Flores",
    },
    {
        idEmployee: "xmLñ23%42dax62321f",
        name: "Graciela Rodriguez"
    },
    {
        idEmployee: "KbVrrox156134&52-23sx",
        name: "Natalia Gomez"
    },
    {
        idEmployee: "Xmendsa323232aXkmk2ñ5.lplm",
        name: "Nicolás Benitez"
    }

];
}

const ClinicsEmployee =async ({ clinicId }) => {
    const router = useRouter()

    //Data Example
    const listEmployeesExample =await getData();

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}`} >
                Volver a clínica
            </Button>
            <Group justify='space-between'>
                <Title>Personal</Title>
                <Button leftSection={<PlusOutlined />} component='a' href={`/menu/clinics/${clinicId}/employees/register`}>
                    Agregar
                </Button>
            </Group>
            <VisualizeData
                content={
                    <>
                        {
                            listEmployeesExample.map((dataEmployee) => {

                                return (<LabelDataText key={dataEmployee.idEmployee} title={dataEmployee.name} type='Nombre del personal' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/menu/clinics/${clinicId}/employees/${dataEmployee.idEmployee}`)} order={6} >Editar</Title>} />
                                )

                            })
                        }

                    </>
                }
            />
        </main>
    );
};

export default ClinicsEmployee;
