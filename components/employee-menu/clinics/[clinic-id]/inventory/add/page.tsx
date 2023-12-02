"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateNumberInteger, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';

const ClinicInventoryAdd = ({ clinicId }) => {
    // const clinicId = params["clinic-id"];

    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/inventory`} >
                Volver a inventario
            </Button>
            <Title>Agregar insumo</Title>
            <MantineForm
                initialValuesForKeys={{
                    name: "",
                    qr: "",
                    category: "",
                    provider: "",
                    acquisitionDate: "",
                    expirationDate: "",
                    cost: "",
                    price: "",
                    stock: "",
                    maxStock: "",
                    minStock: "",
                    observations: ""
                }}
                validateForKeys={{
                    name: validaFieldsNotEmpty,
                    qr: validaFieldsNotEmpty,
                    category: validaFieldsNotEmpty,
                    provider: validaFieldsNotEmpty,
                    acquisitionDate: validaFieldsNotEmpty,
                    expirationDate: validaFieldsNotEmpty,
                    cost: validatePrice,
                    price: validatePrice,
                    stock: validateNumberInteger,
                    maxStock: validateNumberInteger,
                    minStock: validateNumberInteger,
                    observations: validaFieldsNotEmpty
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre del medicamento", "Nombre del medicamento", "name", typeInputForm.TEXT),
                    new CustomInputMantine("Codigo QR", "QR", "qr", typeInputForm.TEXT),
                    new CustomInputMantine("Categoria del medicamento", "Categoria", "category", typeInputForm.TEXT),
                    new CustomInputMantine("Proveedor", "Proveedor", "provider", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de adquisición", "Fecha de adquisición", "acquisitionDate", typeInputForm.DATEPICKER),
                    new CustomInputMantine("Fecha de expiración", "Fecha de expiración", "expirationDate", typeInputForm.DATEPICKER),
                    new CustomInputMantine("Costo", "Costo", "cost", typeInputForm.NUMBER, undefined, true, 1000000),
                    new CustomInputMantine("Precio", "Precio", "price", typeInputForm.NUMBER, undefined, true, 1000000),
                    new CustomInputMantine("Stock", "Stock", "stock", typeInputForm.NUMBER, undefined, false, 1000000),
                    new CustomInputMantine("Maximo stock", "Maximo stock", "maxStock", typeInputForm.NUMBER, undefined, false, 1000000),
                    new CustomInputMantine("Minimo stock", "Minimo stock", "minStock", typeInputForm.NUMBER, undefined, false, 1000000),
                    new CustomInputMantine("Observaciones", "Observaciones", "observations", typeInputForm.TEXT),

                ]}
                onSubmit={(form: any) => {
                    onSubmit(form);
                }}
                labelSubmit='Agregar'
            />
            {/* <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button> */}
        </main>
    );
};

export default ClinicInventoryAdd;