"use client";
import React from 'react';
import { Button, Flex, Title, Text } from "@mantine/core";
import { ArrowLeftOutlined, ExceptionOutlined } from "@ant-design/icons";
import MantineForm from '../../../../../mantine-form/MantineForm';
import { validaFieldsNotEmpty, validateDate, validateEmail, validateNumberInteger, validateNumberTel, validatePassword, validatePrice, } from '../../../../../mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../../../mantine-form/customMantineInput';
import { modals, } from '@mantine/modals';

const getData = async (clientId: string) => {

    const listClients = [
        {
            id: "23da23bada453",
            name: "Ramón Gutierrez",
            tel: "646-127-78-95",
            email: "gutierrez@gmail.com",


            sex: "Hombre",
            address: "Lib. Rubén Escobar, Las Palmas, 22785 Ensenada, B.C.",
            dateBirhday: "344911425000",

        },
        {
            id: "o2m3i29mc9f32",
            name: "Roberto Fernandez",
            tel: "664-187-54-32",
            email: "robert59@hotmail.com",

            sex: "Hombre",
            address: "José María Morelos y Pavón 117, Chapultepec, 22785 Ensenada, B.C.",
            dateBirhday: "929148225000",
        },
        {
            id: "0123mmb64cad",
            name: "Marta Alvarez",
            tel: "662-154-56-85",
            email: "marta13@gmail.com",
            sex: "Mujer",
            address: "Av. Gral. Lázaro Cárdenas 1431, Valle de Chapultepec, 22785 Ensenada, B.C.",
            dateBirhday: "518402625000",

        }
    ]

    return listClients.find((element) => {
        return element.id === clientId;
    });



}


const ClientId = async ({ clinicId, clientId }) => {

    const clientData = await getData(clientId);

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


    if (clientData === undefined) {
        return <main>
            <p>{`No existe un cliente con el ID: ${clientData}`}</p>
        </main>
    }

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
                    new CustomInputMantine("Sexo", "Seleccione el sexo", "sex", typeInputForm.SELECTITEMS, undefined, undefined, undefined, ["Hombre", "Mujer"]),
                    new CustomInputMantine("Dirección", "Dirección", "address", typeInputForm.TEXT),
                    new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "dateBirhday", typeInputForm.DATEPICKER, new Date(Number(clientData.dateBirhday))),
                    new CustomInputMantine("Correo electronico", "Correo electronico", "email", typeInputForm.TEXT),
                ]}
                extraClassName={{ disabled: true }}
            />
        </main>
    );
};

export default ClientId;