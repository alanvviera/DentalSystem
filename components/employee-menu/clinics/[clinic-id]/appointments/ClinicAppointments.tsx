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
            idAppointment: "238umj02x214db23",
            name: "José Gonzalez",
            date: new Date(1701996588000)
        },
        {
            idAppointment: "2893u9u3v2544a23",
            name: "Alicia Martinez",
            date: new Date(1702018188000)
        },
        {
            idAppointment: "2652b23adw424453",
            name: "María Gomez",
            date: new Date(1702099848000)
        },
        {
            idAppointment: "34dv5645323412s",
            name: "Martín Suarez",
            date: new Date(1702177200000)
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
                                return (<LabelDataText  key={dataEmployee.idAppointment} subTileIcon={<>
                                    <p className='font-normal text-sm'>{`Fecha: ${dateToString(dataEmployee.date)}`}</p>
                                    <Space w={12} />
                                </>} type={`Cliente: ${dataEmployee.name}`} subIcon={
                                    <Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/menu/clinics/${clinicId}/appointments/${dataEmployee.idAppointment}`)} order={6} >Editar cita</Title>
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
