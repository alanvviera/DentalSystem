"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import MantineForm from '@/components/mantineForm/MantineForm';
import { allValuesAvailable, validateName } from '@/components/mantineForm/valuesValidate';
import CustomInputMantine, { typeInputForm } from '@/components/mantineForm/customMantineInput';

const FormExampleUpdate = () => {

    const { data: session, status } = useSession();
    if (status === "loading") return <LoadingScreen />

    return (
        <div className='m-5'>
            <MantineForm
                title={"Actualizar paciente"}
                initialValuesForKeys={{ client: "Ricardo arjona", clinic: "Clinica sin dientes", appointmentType: "Extracíon de muelas", nameDentist: "Ricardo milos", date: "25 de julio del 2023", hours: "1:40 PM", description: "Debe de ser atentido por el doctor Similares del consultorio 8" }}
                validateForKeys={{
                    client: validateName,
                    clinic: allValuesAvailable,
                    appointmentType: allValuesAvailable,
                    nameDentist: validateName,
                    date: allValuesAvailable,
                    hours: allValuesAvailable,
                    description: allValuesAvailable
                }}
                listCustomInputMantine={
                    [
                        new CustomInputMantine("Nombre del paciente", "Un nombre", "client", typeInputForm.TEXT),
                        new CustomInputMantine("Nombre de la clinica", "Clinica", "clinic", typeInputForm.TEXT),
                        new CustomInputMantine("Tipo de la cita", "Tipo de la cita", "appointmentType", typeInputForm.TEXT),
                        new CustomInputMantine("Nombre del dentista", "El nombre del dentista", "nameDentist", typeInputForm.TEXT),
                        new CustomInputMantine("Fecha", "Fecha", "date", typeInputForm.TEXT),
                        new CustomInputMantine("Hora", "Hora", "hours", typeInputForm.TEXT),
                        new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
                    ]
                }
                onSubmit={(form) => {
                    //All fields were validated
                    console.log(form.values);
                    form.setInitialValues();
                }}
                labelSubmit='Actualizar'
            />
        </div>
    )
}
export default FormExampleUpdate