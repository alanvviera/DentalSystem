"use client";
import React from 'react';
import { Button, Flex, Text, Title } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberTel } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';

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
        sex: "Hombre",
        state: "Baja California",
        speciality: "Cirujano dental"
    };
}

const ClinicEmployeesId = async ({ clinicId,employeeId }) => {

    //Data Example
    const dataEmployeeExample = await getData(employeeId);
    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    const onDelete = () => {
        console.log(`Delete employee with id ${employeeId}`);
    }

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Estas seguro de eliminar a este empleado',
            centered: true,
            children: (
                <Text size="sm">
                    Esta opción no es reversible
                </Text>
            ),
            labels: { confirm: 'Eliminar empleado', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onCancel: () => { },
            onConfirm: () => onDelete(),
    });

    return (
        <main style={{ margin: "20px" }}>
            <Flex justify={"space-between"}>
                <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/employees`} >
                    Volver a personal
                </Button>
                <Button justify="center" color='red' px={0} component="a" rightSection={<DeleteFilled />} variant="filled" pl={"xs"} pr={"xs"} onClick={openDeleteModal} >
                    Eliminar
                </Button>
            </Flex>
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
                    sex: validaFieldsNotEmpty,
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
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sex", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre","Mujer"] ),
                    new CustomInputMantine("Lugar de estado", "Lugar de estado", "state", typeInputForm.TEXT),
                    new CustomInputMantine("Especialidad", "Especialidad", "speciality", typeInputForm.TEXT),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Guardar cambios'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default ClinicEmployeesId;
