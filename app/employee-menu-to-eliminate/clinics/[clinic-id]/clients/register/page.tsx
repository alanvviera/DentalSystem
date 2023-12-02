"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberInteger, validateNumberTel, validatePassword, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const RegisterClientPage = ({ params }) => {
    const clinicId = params["clinic-id"];

    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/clients`} >
                Volver a clientes
            </Button>
            <Title>Agregar cliente</Title>
            <MantineForm
                initialValuesForKeys={{
                    name: "",
                    tel: "",
                    sex: "",
                    address: "",
                    dateBirhday: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
     
                }}
                validateForKeys={{
                    name: validaFieldsNotEmpty,
                    tel: validateNumberTel,
                    sex: validaFieldsNotEmpty,
                    address: validaFieldsNotEmpty,
                    dateBirhday: validateDate,
                    email: validateEmail,
                    confirmPassword: validatePassword
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre completo", "Nombre completo", "name", typeInputForm.TEXT),
                    new CustomInputMantine("Telefono", "Telefono, ejem: 646-123-45-67", "tel", typeInputForm.TEXT),
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sex", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre","Mujer"] ),
                    new CustomInputMantine("Dirección", "Dirección", "address", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirhday", typeInputForm.DATEPICKER),
                    new CustomInputMantine("Correo electronico", "Correo electronico", "email", typeInputForm.TEXT),
                    new CustomInputMantine("Contraseña", "Contraseña de minimo 8 caracteres", "password", typeInputForm.PASSWORD),
                    new CustomInputMantine("Confirmar contraseña", "Contraseña de minimo 8 caracteres", "confirmPassword", typeInputForm.PASSWORD),
                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Registrar'
            />
         <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/clients/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default RegisterClientPage;