"use client";
import React from 'react';
import { Button, Flex, Title ,Text} from "@mantine/core";
import { ArrowLeftOutlined, ExceptionOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../../components/mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberInteger, validateNumberTel, validatePassword, validatePrice, } from '../../../../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../../components/mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';

const getData = async () => {
    return {
        id: "239x9mj21xa2llg",
        name: "Tigre el toño",
        tel: "646-789-63-52",
        sex: "Hombre",
        address: "Las palmas #23",
        dateBirhday: "1669514810000",
        email: "zucaritas@hotmail.com",
    };
}


const ViewClientsPage = async ({ params }) => {
    const clinicId = params["clinic-id"];


    const clientData = await getData();

    const addBlackList = () => {
        console.log(`Client in BlackList with id ${clientData.id}`);
    }

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: `¿Estas seguro de agregar al cliente ${clientData.name} a la lista negra?`,
            centered: true,
            children: (
                <Text size="sm">
                    Puede revertir esta opción en el futuro si lo desea.
                </Text>
            ),
            labels: { confirm: 'Agregar', cancel: "Cancelar" },
            confirmProps: { color: 'black' },
            onCancel: () => { },
            onConfirm: () => addBlackList(),
        });


    return (
        <main style={{ margin: "20px" }}>
            <Flex justify={"space-between"}>
                <Button px={0} component="a" leftSection={<ArrowLeftOutlined />} variant="subtle" href={`/menu/clinics/${clinicId}/clients`} >
                    Volver a clientes
                </Button>
                <Button justify="center" color='black' px={0} component="a" rightSection={<ExceptionOutlined />} variant="filled" pl={"xs"} pr={"xs"} onClick={openDeleteModal} >
                    Añadir a la lista negra
                </Button>
            </Flex>

            <Title>{clientData.name}</Title>
            <MantineForm
                initialValuesForKeys={{
                    ...clientData

                }}
                validateForKeys={{
                    name: validaFieldsNotEmpty,
                    tel: validateNumberTel,
                    sex: validaFieldsNotEmpty,
                    address: validaFieldsNotEmpty,
                    dateBirhday: validateDate,
                    email: validateEmail,
                }}
                listCustomInputMantine={[
                    //1- Title, 2- Subtile, 3-Is this same key that in validateForKeys, 4- TypeText, 5 -allowDecimal, 6 - maxValue
                    new CustomInputMantine("Nombre completo", "Nombre completo", "name", typeInputForm.TEXT,),
                    new CustomInputMantine("Telefono", "Telefono, ejem: 646-123-45-67", "tel", typeInputForm.TEXT),
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sex", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre","Mujer"] ),
                    new CustomInputMantine("Dirección", "Dirección", "address", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirhday", typeInputForm.DATEPICKER, new Date(Number(clientData.dateBirhday))),
                    new CustomInputMantine("Correo electronico", "Correo electronico", "email", typeInputForm.TEXT),
                ]}
                extraClassName={{ disabled: true }}
            />
        </main>
    );
};

export default ViewClientsPage;