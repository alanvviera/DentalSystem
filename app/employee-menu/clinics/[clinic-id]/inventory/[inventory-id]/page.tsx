"use client";
import React from 'react';
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateNumberInteger, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';


const getDataProductId = async (idProduct: String) => {

    console.log(`Id product: ${idProduct}`);

    return {
        idProduct: "",
        name: "Paracetamol",
        qr: "26da24ax",
        category: "Calmante",
        provider: "Empresa Gitra",
        acquisitionDate: "1577865600000",
        expirationDate: "1735718400000",
        cost: 1000.59,
        price: 250.59,
        stock: 100,
        maxStock: 150,
        minStock: 30,
        observations: "Producto para venta sin receta"
    };
}

const ProductInventoryPage = async ({ params }) => {
    const clinicId = params["clinic-id"];
    const inventoryId = params["inventory-id"];

    const productExample = await getDataProductId(inventoryId);
    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    return (
        <main style={{ margin: "20px" }}>
            <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/employee-menu/clinics/${clinicId}/inventory`} >
                Volver a inventario
            </Button>
            <Title>Insumo</Title>
            <MantineForm
                initialValuesForKeys={{
                    ...productExample
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
                    new CustomInputMantine("Fecha de adquisición", "Fecha de adquisición", "acquisitionDate", typeInputForm.DATEPICKER,new Date(Number(productExample.acquisitionDate))),
                    new CustomInputMantine("Fecha de expiración", "Fecha de expiración", "expirationDate", typeInputForm.DATEPICKER,new Date(Number(productExample.expirationDate))),
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
            {/* <Button variant="default" component="a" href={`/employee-menu/clinics/${clinicId}/employees/`} fullWidth mt={10}>
                Cancelar
            </Button> */}
        </main>
    );
};

export default ProductInventoryPage;