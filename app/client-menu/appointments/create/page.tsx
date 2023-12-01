"use client";
import React from 'react';
import MantineForm from '../../../../components/mantine-form/MantineForm';
import CustomInputMantine, { typeInputForm } from '../../../../components/mantine-form/customMantineInput';
import { allValuesAvailable, validateDate, validateName, validateNumber } from '../../../../components/mantine-form/valuesValidate';
import { Button, Title } from '@mantine/core';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Page = () => (
    <div className='m-5'>
    <>
    <Button
      px={0}
      component="a"
      href="/client-menu/appointments"
      leftSection={<ArrowLeftOutlined />}
      variant="subtle"
    >
      Volver a Citas
    </Button>
    <Title>Programar cita</Title>
        <MantineForm
            initialValuesForKeys={{
                client: "",
                clinic: "",
                appointmentType: "",
                nameDentist: "",
                date: "",
                hours: "",
                description: ""
            }}
            validateForKeys={{
                client: validateName,
                clinic: allValuesAvailable,
                appointmentType: allValuesAvailable,
                nameDentist: validateName,
                date: validateDate,
                hours: validateNumber,
                description: allValuesAvailable
            }}
            listCustomInputMantine={[
                new CustomInputMantine("Nombre del paciente", "Un nombre", "client", typeInputForm.TEXT),
                new CustomInputMantine("Nombre de la clinica", "Clinica", "clinic", typeInputForm.TEXT),
                new CustomInputMantine("Tipo de la cita", "Tipo de la cita", "appointmentType", typeInputForm.TEXT),
                new CustomInputMantine("Nombre del dentista", "El nombre del dentista", "nameDentist", typeInputForm.TEXT),
                new CustomInputMantine("Fecha", "Fecha", "date", typeInputForm.DATEPICKER),
                new CustomInputMantine("Hora", "Hora", "hours", typeInputForm.DATETIME),
                new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
            ]}
            onSubmit={(form: any) => {
                // All fields were validated
                console.log(form.values);
                form.setInitialValues();
            }}
            labelSubmit='Crear'
        />
        </>
    </div>
);

export default Page;

