"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateNumber,  } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const getData =async (clinicId)=>{
    return {
        listClinics: ["Clinica lopez", "Clinica mariano"],
        listTypeAppointments: ["Extracción de muelas", "Limpieza dental"],
    }
}

const CreateAppointment =async ({ params }) => {
    const clinicId = params["clinic-id"];

    const dataClinicExample = await getData(clinicId);

    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/appointments`} >
                Volver a citas
            </Button>
            <Title>Crear cita</Title>
            <MantineForm
                initialValuesForKeys={{
                    nameClient: "",
                    selectClinic: "",
                    typeAppointment: "",
                    dateAppointment: "",
                    nameDentist: "",
                    timeAppointment: "",
                    description: ""
                }}
                validateForKeys={{
                    nameClient: validaFieldsNotEmpty,
                    selectClinic: validaFieldsNotEmpty,
                    typeAppointment: validaFieldsNotEmpty,
                    dateAppointment: validateDate,
                    nameDentist: validaFieldsNotEmpty,
                    timeAppointment: validateNumber,
                    description: validaFieldsNotEmpty
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre del cliente", "Nombre del cliente", "nameClient", typeInputForm.TEXT),
                    new CustomInputMantine("Selecciona la clínica", "Seleccione una clínica", "selectClinic", typeInputForm.SELECTITEMS, undefined, undefined, undefined,dataClinicExample.listClinics ),
                    new CustomInputMantine("Tipo de cita", "Seleccione una tipo de cita", "typeAppointment", typeInputForm.SELECTITEMS, undefined, undefined, undefined,dataClinicExample.listTypeAppointments ),
                    new CustomInputMantine("Nombre del dentista", "Nombre del dentista", "nameDentist", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de cita", "Fecha de cita", "dateAppointment", typeInputForm.DATEPICKER, undefined, undefined, undefined, undefined, new Date()),
                    new CustomInputMantine("Hora de cita", "Hora de cita", "timeAppointment", typeInputForm.DATETIME),
                    new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Agendar'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/appointments/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default CreateAppointment;