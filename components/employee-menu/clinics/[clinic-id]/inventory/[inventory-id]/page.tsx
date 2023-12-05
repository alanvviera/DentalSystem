"use client";
import React from 'react';
import { Button, Flex, Title, Text } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateNumberInteger, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';
import { MEDICATIONCATEGORIES } from '../../../../../../constants/constants';


const getDataProductId = async (idProduct: String) => {

    const listMedicaments = [
        {
            idProduct: "dkjNehujf",
            name: "Cloroquina",
            acquisitionDate: "1700436088000",
            expirationDate: "1725062400000",
            cost: 75.56,
            stock: 25,
            qr: "4ad345a24b",
            category: "Analgésicos",
            provider: "Provedor GITA",
            price: 560.59,
            maxStock: 250,
            minStock: 50,
            observations: "Producto para venta sin receta",
        },
        {
            idProduct: "200dsajn2xall4",
            name: "Aspirina",
            acquisitionDate: "1699744888000",
            expirationDate: "1746662400000",
            cost: 10.56,
            stock: 36,
            qr: "565262dsd242jy",
            category: "Antiinflamatorios",
            provider: "Farmacéutica estrella",
            price: 100.99,
            maxStock: 300,
            minStock: 50,
            observations: "Producto para venta sin receta",
        },
        {
            idProduct: "fmk23xlp2l3",
            name: "Amoxicilina",
            acquisitionDate: "1642461688000",
            expirationDate: "1754611200000",
            cost: 16.59,
            stock: 5,
            qr: "43ada43vad23",
            category: "Antibióticos",
            provider: "Farmaceutica Green",
            price: 300.59,
            maxStock: 90,
            minStock: 15,
            observations: "Producto para venta con receta",
        }
    ];

    return listMedicaments.find((element) => element.idProduct === idProduct);


}

const ClinicInventoryId = async ({ clinicId, inventoryId }) => {
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

    if (productExample === undefined) {
        return <main>
            <p>{`No existe un medicamento con el ID: ${inventoryId}`}</p>
        </main>
    }


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
                    acquisitionDate: validateDate,
                    expirationDate: validateDate,
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
                    new CustomInputMantine(
                        "Categoria del medicamento", "Categoria", "category",
                        typeInputForm.SELECTITEMS,
                        undefined,
                        undefined,
                        undefined,
                        MEDICATIONCATEGORIES
                    ),
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