"use client";
import React from 'react';

import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberInteger, validateNumberTel } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const EditClinicsPage = ({ params }) => {
    const clinicId = params["clinic-id"];

    //Data Example
    const dataEmployeeExample = {
        name: "John Wick",
        email: "john56@gmail.com",
        numTel: "646-125-78-96",
        curp: "PEGJ850315HJCRRN07",
        activity: "Médico dentista",
        medicalDegree: "Licenciatura y doctorado",
        addrress: "Valle verde #116",
        dateBirthday: "25/16/2020",
        gender: "Hombre",
        state: "Baja California",
        speciality: "Cirujano dental"
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/employee-menu/clinics/${clinicId}/employees`} >
                Volver a personal
            </Button>
            <Title>Información del empleado</Title>
            <MantineForm
                initialValuesForKeys={{
                    ...dataEmployeeExample

                }}
                validateForKeys={{
                    name: validaFieldsNotEmpty,
                    email: validateEmail,
                    numTel: validateNumberTel,
                    curp: validaFieldsNotEmpty,
                    activity: validaFieldsNotEmpty,
                    medicalDegree: validaFieldsNotEmpty,
                    addrress: validaFieldsNotEmpty,
                    dateBirthday: validateDate,
                    gender: validaFieldsNotEmpty,
                    state: validaFieldsNotEmpty,
                    speciality: validaFieldsNotEmpty
                }}
                listCustomInputMantine={[
                    new CustomInputMantine("Dirección de la clínica", "Tu dirección", "addressClinic", typeInputForm.TEXT),
                    new CustomInputMantine("Número de edificio", "Agregue su número de edificio", "buildingNumber", typeInputForm.TEXT),
                    new CustomInputMantine("Número de teléfono", "Ejem: 646-123-45-67", "tel", typeInputForm.TEXT),
                    new CustomInputMantine("Estatus", "Ingrese el estatus de su clínica", "status", typeInputForm.TEXT),

                ]}
                onSubmit={(form: any) => {
                    // All fields were validated
                    console.log(form.values);
                    form.setInitialValues();
                }}
                labelSubmit='Crear'
            />
        </main>
    );
};

export default EditClinicsPage;
