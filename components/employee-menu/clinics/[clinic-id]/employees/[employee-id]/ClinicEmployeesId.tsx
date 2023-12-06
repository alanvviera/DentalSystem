"use client";
import React from 'react';
import { Button, Flex, Text, Title } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberTel } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';
import { doctorInfo, employeeInfo } from '../../../../../../constants/constants';

const getData = async (employeeId: String) => {

    const listEmployees = [
        {
            idEmployee: "dsdaxXe2mmadfasd23",
            name: "Julio Flores",
            email: "julio@gmail.com",
            numTel: "646-130-18-96",
            curp: "JUFJ770826MCLLLS43",
            activity: "Jefe de Departamento",
            medicalDegree: "Doctor en Medicina",
            addrress: "Valle verde #116",
            dateBirthday: "1701388800000",
            sex: "Hombre",
            state: "Baja California",
            speciality: "Dermatología"
        },
        {
            idEmployee: "xmL2342dax62321f",
            name: "Graciela Rodriguez",
            email: "graci@gmail.com",
            numTel: "646-236-79-99",
            curp: "GAR770826MCLRD61",
            activity: "Director Médico",
            medicalDegree: "Especialización en Cirugía",
            addrress: "Bella vista #28",
            dateBirthday: "1701388800000",
            sex: "Mujer",
            state: "Baja California",
            speciality: "Pediatría"
        },
        {
            idEmployee: "KbVrrox156sd345223sx",
            name: "Natalia Gomez",
            email: "natali19@gmail.com",
            numTel: "646-895-25-26",
            curp: "NAG990515MCLTM85",
            activity: "Médico Senior",
            medicalDegree: "Maestría en Investigación Médica",
            addrress: "Calle los azulejos #126",
            dateBirthday: "1701388800000",
            sex: "Mujer",
            state: "Baja California",
            speciality: "Urología"
        },
        {
            idEmployee: "fds3acd326as235",
            name: "Nicolás Benitez",
            email: "benito89@gmail.com",
            numTel: "664-158-18-16",
            curp: "NIB990515MCLCN79",
            activity: "Jefe de Recursos Humanos",
            medicalDegree: "No disponible",
            addrress: "Los encinos #196",
            dateBirthday: "1701388800000",
            sex: "Hombre",
            state: "Baja California",
            speciality: "No disponible"
        }
    ];

    const newEmployeed = listEmployees.find((element) => element.idEmployee === employeeId);

    return newEmployeed;
}

const ClinicEmployeesId = async ({ clinicId, employeeId }) => {

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

    if (dataEmployeeExample === undefined) {
        return <main>
            <p>{`No existe un empleado con el ID: ${employeeId}`}</p>
        </main>
    }

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
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirthday", typeInputForm.DATEPICKER, new Date(Number(dataEmployeeExample.dateBirthday))),
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
                labelSubmit='Guardar cambios'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default ClinicEmployeesId;
