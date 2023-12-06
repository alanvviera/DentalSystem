"use client";
import React from 'react';
import { Button, Flex, Title, Text } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateNumber, } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';
import { CLINICLIST, TYPELISTAPPOINTMENTS } from '../../../../../../constants/constants';


const getData = async (clinicId, appointmentId) => {

    const listAppointments = [
        {
            idAppointment: "238umj02x214db23",
            nameClient: "José Gonzalez",
            selectClinic: "Dental solutions",
            typeAppointment: "Limpieza dental",
            dateAppointment: new Date(1701996588000).getTime(),
            timeAppointment: new Date(2940000).getTime(),
            description: "El paciente es alérgico al paracetamol",
            nameDentist: "Julio Flores",
        },
        {
            idAppointment: "2893u9u3v2544a23",
            nameClient: "Alicia Martinez",
            selectClinic: "Dental solutions",
            typeAppointment: "Tratamiento de caries",
            dateAppointment: new Date(1702018188000).getTime(),
            timeAppointment: new Date(24540000).getTime(),
            description: "Paciente con primer molar infectada",
            nameDentist: "Graciela Rodriguez",
        },
        {
            idAppointment: "2652b23adw424453",
            nameClient: "María Gomez",
            selectClinic: "Dental solutions",
            typeAppointment: "Blanqueamiento dental",
            dateAppointment: new Date(1702099848000).getTime(),
            timeAppointment: new Date(19800000).getTime(),
            description: "Blanqueamiento dental con tratamiento no invasivo",
            nameDentist: "Natalia Gomez",
        },
        {
            idAppointment: "34dv5645323412s",
            nameClient: "Martín Suarez",
            dateAppointment: new Date(1702177200000),
            selectClinic: "Dental solutions",
            typeAppointment: "Implantes dentales",
            timeAppointment: new Date(10800000).getTime(),
            description: "Implementación de implantes dentales con pernos metálicos",
            nameDentist: "Julio Flores",
        }

    ];

    const findAppointment = listAppointments.find((element) => {
        return element.idAppointment === appointmentId
    })

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
        dataClinict: {
            listClinics: CLINICLIST,
            listTypeAppointments: TYPELISTAPPOINTMENTS,
        },
        dataAppointment: findAppointment
    }
}

const ClinicAppointmentId = async ({ clinicId, appointmentId }) => {
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

    if (dataClinicExample.dataAppointment === undefined) {
        return <main>
            <p>{`No existe una cita con el ID: ${appointmentId}`}</p>
        </main>
    }

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