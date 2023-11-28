"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberTel } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const RegisterClinicsPage = ({ params }) => {
    const clinicId = params["clinic-id"];

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
            <Title>Agregar personal</Title>
            <MantineForm
                initialValuesForKeys={{
                    name: "",
                    email: "",
                    numTel: "",
                    curp: "",
                    activity: "",
                    medicalDegree: "",
                    addrress: "",
                    dateBirthday: "",
                    sexo: "",
                    state: "",
                    speciality: ""

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
                    sexo: validaFieldsNotEmpty,
                    state: validaFieldsNotEmpty,
                    speciality: validaFieldsNotEmpty
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre completo", "Nombre completo", "name", typeInputForm.TEXT),
                    new CustomInputMantine("Correo electrónico", "Correo electrónico", "email", typeInputForm.TEXT),
                    new CustomInputMantine("Número de teléfono", "Ejem: 646-123-45-67", "numTel", typeInputForm.TEXT),
                    new CustomInputMantine("CURP", "Ingrese el curp", "curp", typeInputForm.TEXT),
                    new CustomInputMantine("Cargo", "Cargo", "activity", typeInputForm.TEXT),
                    new CustomInputMantine("Licencia medica", "Licencia medica", "medicalDegree", typeInputForm.TEXT),
                    new CustomInputMantine("Dirección", "Dirección", "addrress", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirthday", typeInputForm.DATEPICKER, ),
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sexo", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre","Mujer"] ),
                    new CustomInputMantine("Lugar de estado", "Lugar de estado", "state", typeInputForm.TEXT),
                    new CustomInputMantine("Especialidad", "Especialidad", "speciality", typeInputForm.TEXT),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Registrar'
            />
            <Button variant="default" component="a" href={`/employee-menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default RegisterClinicsPage;