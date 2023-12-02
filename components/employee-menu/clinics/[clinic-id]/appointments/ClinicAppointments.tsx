"use client";
import React from 'react';
import { Button, Group, Space, Title } from "@mantine/core";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import VisualizeData from '../../../../visualize-data/VisualizeData';
import LabelDataText from '../../../../visualize-data/labelsData/LabelDataText';
import { useRouter } from 'next/navigation';
import { dateToString } from '../../../../../utils/parseDates';

const getData = async () => {
    return [
        {
            idClient: "dsdaxXe2mmadfasd23",
            name: "Son goku",
            date: new Date(1592712920000)
        },
        {
            idClient: "xmLñ23%42dax62321f",
            name: "Broly",
            date: new Date(1638077001000)
        },
        {
            idClient: "KbVrrox156134&52-23sx",
            name: "Gohan",
            date: new Date(1638077001000)
        },
        {
            idClient: "Xmendsa323232aXkmk2ñ5.lplm",
            name: "Goten's",
            date: new Date(1638077001000)
        }

    ];
}

const ClinicAppointments = async ({ clinicId }) => {
    const router = useRouter()
    // const clinicId = params["clinic-id"];

    //Data Example
    const listEmployeesExample = await getData();

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}`} >
                Volver a clínica
            </Button>
            <Group justify='space-between'>
                <Title>Citas</Title>
                <Button leftSection={<PlusOutlined />} component='a' href={`/menu/clinics/${clinicId}/appointments/create`}>
                    Agregar
                </Button>
            </Group>
            <VisualizeData
                content={
                    <>
                        {
                            listEmployeesExample.map((dataEmployee) => {
                                return (<LabelDataText  key={dataEmployee.idClient} subTileIcon={<>
                                    <p className='font-normal text-sm'>{`Fecha: ${dateToString(dataEmployee.date)}`}</p>
                                    <Space w={12} />
                                </>} type={`Cliente: ${dataEmployee.name}`} subIcon={
                                    <Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/menu/clinics/${clinicId}/appointments/${dataEmployee.idClient}`)} order={6} >Editar cita</Title>
                                } />
                                )

                            })
                        }

                    </>
                }
            />
        </main>
    );
};

export default ClinicAppointments;
