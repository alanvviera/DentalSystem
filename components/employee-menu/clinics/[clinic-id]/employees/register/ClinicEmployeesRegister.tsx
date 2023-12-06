"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberTel } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { doctorInfo, employeeInfo } from '../../../../../../constants/constants';

const ClinicEmployeesRegister = ({ clinicId }) => {


    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/employees`} >
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
                    sex: "",
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
                    sex: validaFieldsNotEmpty,
                    state: validaFieldsNotEmpty,
                    speciality: validaFieldsNotEmpty
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre completo", "Nombre completo", "name", typeInputForm.TEXT),
                    new CustomInputMantine("Correo electrónico", "Correo electrónico", "email", typeInputForm.TEXT),
                    new CustomInputMantine("Número de teléfono", "Ejem: 646-123-45-67", "numTel", typeInputForm.TEXT),
                    new CustomInputMantine("CURP", "Ingrese el curp", "curp", typeInputForm.TEXT),
                    new CustomInputMantine(
                        "Cargo *",
                        "Cargo",
                        "activity",
                        typeInputForm.SELECTITEMS,
                        undefined,
                        undefined,
                        undefined,
                        employeeInfo.CLINIC_POSITIONS
                    ),
                    new CustomInputMantine(
                        "Licencia medica", "Licencia medica", "medicalDegree",
                        typeInputForm.SELECTITEMS,
                        undefined,
                        undefined,
                        undefined,
                        employeeInfo.ACADEMIC_DEGREES
                    ),
                    new CustomInputMantine("Dirección", "Dirección", "addrress", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirthday", typeInputForm.DATEPICKER,),
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sex", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre", "Mujer"]),
                    new CustomInputMantine("Lugar de estado", "Lugar de estado", "state", typeInputForm.TEXT),
                    new CustomInputMantine(
                        "Especialidad", "Especialidad", "speciality",
                        typeInputForm.SELECTITEMS,
                        undefined,
                        undefined,
                        undefined,
                        doctorInfo.SPECIALTIES
                      ),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Registrar'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default ClinicEmployeesRegister;