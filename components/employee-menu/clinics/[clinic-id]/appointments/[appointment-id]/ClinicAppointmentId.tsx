"use client";
import React from 'react';
import { Button, Flex, Title , Text} from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateNumber, } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';


const getData = async (clinicId, appointmentId) => {
    const dataClinict = {
        listClinics: ["Clinica lopez", "Clinica mariano"],
        listTypeAppointments: ["Extracción de muelas", "Limpieza dental"],
    };

    const dataAppointment = {
        idAppointment: "dasdk20,30xa34a",
        nameClient: "Hombre araña",
        selectClinic: "Clinica lopez",
        typeAppointment: "Extracción de muelas",
        dateAppointment: new Date(1592712920000).getTime(),
        timeAppointment: new Date(18000000).getTime(),
        description: "Favor de pasar con ricardo fernandez",
        nameDentist: "Pedro picapiedra",
    }

    return {
        dataClinict,
        dataAppointment
    }
}

const ClinicAppointmentId = async ({clinicId,appointmentId}) => {
    // const clinicId = params["clinic-id"];
    // const appointmentId = params["appointment-id"];


    const dataClinicExample = await getData(clinicId, appointmentId);

    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    const onDelete = () => {
        console.log(`Delete appointment with id ${dataClinicExample.dataAppointment.idAppointment}`);
    }

    const openDeleteModal = () =>
    modals.openConfirmModal({
        title: '¿Estas seguro de eliminar esta cita?',
        centered: true,
        children: (
            <Text size="sm">
                Esta opción no es reversible.
            </Text>
        ),
        labels: { confirm: 'Eliminar cita', cancel: "Cancelar" },
        confirmProps: { color: 'red' },
        onCancel: () => { },
        onConfirm: () => onDelete(),
});

    return (
        <main style={{ margin: "20px" }}>


            <Flex justify={"space-between"}>
                <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/appointments`} >
                    Volver a citas
                </Button>
                <Button justify="center" color='red' px={0} component="a" rightSection={<DeleteFilled />} variant="filled" pl={"xs"} pr={"xs"} onClick={openDeleteModal} >
                    Eliminar
                </Button>
            </Flex>


            <Title>Detalles de la cita</Title>
            <MantineForm
                initialValuesForKeys={{
                    ...dataClinicExample.dataAppointment
                }}
                validateForKeys={{
                    nameClient: validaFieldsNotEmpty,
                    selectClinic: validaFieldsNotEmpty,
                    typeAppointment: validaFieldsNotEmpty,
                    dateAppointment: validateDate,
                    timeAppointment: validateNumber,
                    description: validaFieldsNotEmpty,
                    nameDentist: validaFieldsNotEmpty,
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre del cliente", "Nombre del cliente", "nameClient", typeInputForm.TEXT),
                    new CustomInputMantine("Selecciona la clínica", "Seleccione una clínica", "selectClinic", typeInputForm.SELECTITEMS, undefined, undefined, undefined, dataClinicExample.dataClinict.listClinics),
                    new CustomInputMantine("Tipo de cita", "Seleccione una tipo de cita", "typeAppointment", typeInputForm.SELECTITEMS, undefined, undefined, undefined, dataClinicExample.dataClinict.listTypeAppointments),
                    new CustomInputMantine("Nombre del dentista", "Nombre del dentista", "nameDentist", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de cita", "Fecha de cita", "dateAppointment", typeInputForm.DATEPICKER, new Date(dataClinicExample.dataAppointment.dateAppointment), undefined, undefined, undefined, new Date()),
                    new CustomInputMantine("Hora de cita", "Hora de cita", "timeAppointment", typeInputForm.DATETIME, new Date(dataClinicExample.dataAppointment.timeAppointment)),
                    new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Reprogramar'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/appointments/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default ClinicAppointmentId;