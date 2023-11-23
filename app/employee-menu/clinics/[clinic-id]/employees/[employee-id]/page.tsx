"use client";
import React from 'react';

import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberInteger, validateNumberTel } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const getData = async (employeeId: String) => {
    return {
        name: "John Wick",
        email: "john56@gmail.com",
        numTel: "646-125-78-96",
        curp: "PEGJ850315HJCRRN07",
        activity: "Médico dentista",
        medicalDegree: "Licenciatura y doctorado",
        addrress: "Valle verde #116",
        dateBirthday: "1701388800000",
        gender: "Hombre",
        state: "Baja California",
        speciality: "Cirujano dental"
    };
}

const EditClinicsPage = async ({ params }) => {
    const clinicId = params["clinic-id"];
    const employeeId = params["employee-id"]

    //Data Example
    const dataEmployeeExample = await getData(employeeId);

    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
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
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText
                    new CustomInputMantine("Nombre completo", "Nombre completo", "name", typeInputForm.TEXT),
                    new CustomInputMantine("Correo electrónico", "Correo electrónico", "email", typeInputForm.TEXT),
                    new CustomInputMantine("Número de teléfono", "Ejem: 646-123-45-67", "numTel", typeInputForm.TEXT),
                    new CustomInputMantine("CURP", "Ingrese el curp", "curp", typeInputForm.TEXT),
                    new CustomInputMantine("Cargo", "Cargo", "activity", typeInputForm.TEXT),
                    new CustomInputMantine("Licencia medica", "Licencia medica", "medicalDegree", typeInputForm.TEXT),
                    new CustomInputMantine("Dirección", "Dirección", "addrress", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirthday", typeInputForm.DATEPICKER, new Date(Number(dataEmployeeExample.dateBirthday))),
                    new CustomInputMantine("Genero", "Genero", "gender", typeInputForm.TEXT),
                    new CustomInputMantine("Lugar de estado", "Lugar de estado", "state", typeInputForm.TEXT),
                    new CustomInputMantine("Especialidad", "Especialidad", "speciality", typeInputForm.TEXT),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Crear'
            />
        </main>
    );
};

export default EditClinicsPage;
