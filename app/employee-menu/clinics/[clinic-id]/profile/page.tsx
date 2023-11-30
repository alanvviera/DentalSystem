"use client";
import React from 'react';
import CustomInputMantine, { typeInputForm } from '../../../../../components/mantine-form/customMantineInput';
import { validaFieldsNotEmpty, validateNumberInteger, validateNumberTel } from '../../../../../components/mantine-form/valuesValidate';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../components/mantine-form/MantineForm';


const getData = async (clinicId) => {
    return {
        addressClinic: "Calle buenos aires",
        buildingNumber: "28",
        tel: "646-123-45-67",
        status: "Activo"
    };
}

const EditClinicsPage = async ({params}) => {
    const clinicId = params["clinic-id"];

    //Data Example
    const dataForm = await getData(clinicId);

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/employee-menu/clinics/${clinicId}`} >
                Volver a clínica
            </Button>
            <Title>Editar información de la clínica</Title>
            <MantineForm
                initialValuesForKeys={{
                    ...dataForm

                }}
                validateForKeys={{
                    addressClinic: validaFieldsNotEmpty,
                    buildingNumber: validateNumberInteger,
                    tel: validateNumberTel,
                    status: validaFieldsNotEmpty
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