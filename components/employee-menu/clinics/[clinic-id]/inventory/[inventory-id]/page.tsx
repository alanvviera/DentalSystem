"use client";
import React from 'react';
import { Button, Flex, Title, Text } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateNumberInteger, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';


const getDataProductId = async (idProduct: String) => {

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

const ClinicInventoryId = async ({ clinicId ,inventoryId}) => {
    // const clinicId = params["clinic-id"];
    // const inventoryId = params["inventory-id"];

    const productExample = await getDataProductId(inventoryId);
    //OnSubmit
    const onSubmit = (form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
    }

    const onDelete = () => {
        console.log(`Delete product with id ${inventoryId}`);
    }

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: `¿Estas seguro de eliminar el medicamento ${productExample.name}?`,
            centered: true,
            children: (
                <Text size="sm">
                    Esta opción no es reversible.
                </Text>
            ),
            labels: { confirm: 'Eliminar producto', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onCancel: () => { },
            onConfirm: () => onDelete(),
        });

    return (
        <main style={{ margin: "20px" }}>
            <Flex justify={"space-between"}>
                <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/inventory`} >
                    Volver a inventario
                </Button>
                <Button justify="center" color='red' px={0} component="a" rightSection={<DeleteFilled />} variant="filled" pl={"xs"} pr={"xs"} onClick={openDeleteModal} >
                    Eliminar
                </Button>
            </Flex>
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
                    new CustomInputMantine("Fecha de adquisición", "Fecha de adquisición", "acquisitionDate", typeInputForm.DATEPICKER, new Date(Number(productExample.acquisitionDate))),
                    new CustomInputMantine("Fecha de expiración", "Fecha de expiración", "expirationDate", typeInputForm.DATEPICKER, new Date(Number(productExample.expirationDate))),
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
                labelSubmit='Guardar cambios'
            />
            <Button variant="default" component="a" href={`/menu/clinics/${clinicId}/inventory/`} fullWidth mt={10}>
                Cancelar
            </Button>
        </main>
    );
};

export default ClinicInventoryId;