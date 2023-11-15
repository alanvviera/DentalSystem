"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Space, Title, } from '@mantine/core';
import VisualizeData from '@/components/visualizeData/VisualizeData';
import VisualizeDataButtonEdit from '@/components/visualizeData/buttonsData/VisualizeDataButtonEdit';
import VisualizeDataButtonDelete from '@/components/visualizeData/buttonsData/VisualizeDataButtonDelete';
import { LabelDataText } from '@/components/visualizeData/labelsData/LabelDataText';
import VisualizeDataButtonReschedule from '@/components/visualizeData/buttonsData/VisualizeDataButtonProgramming';
import FormExampleUpdate from '../update/page';

const FormExampleVisualize = () => {

    const { data: session, status } = useSession();
    if (status === "loading") return <LoadingScreen />

    return (
        <div className='flex flex-row w-full justify-center content-center items-center'>
            <VisualizeData
                actionsTop={(<>
                    <VisualizeDataButtonEdit showComponent={<FormExampleUpdate extraClass='w-60 min-h-min' />} />
                    <Space w={"4px"} />
                    <VisualizeDataButtonDelete showComponent={<FormExampleUpdate extraClass='w-60 min-h-min' />} />
                </>)
                }
                content={<>
                    <Title order={4} className='text-center text-primary font-bold' >Detalles de la cita</Title>
                    <LabelDataText title='Ricardo arjona' type='Nombre del cliente' ></LabelDataText>
                    <LabelDataText title='Clinica sin dientes' type='Clinica' ></LabelDataText>
                    <LabelDataText title='Extracíon de muelas' type='Tipo de cita' ></LabelDataText>
                    <LabelDataText title='Ricardo milos' type='Nombre del dentista' ></LabelDataText>
                    <LabelDataText title='25 de julio del 2023' type='Fecha' ></LabelDataText>
                    <LabelDataText title='1:40 PM' type='Hora' ></LabelDataText>
                    <LabelDataText title='Debe de ser atentido por el doctor Similares del consultorio 8' type='Descripción' useTextArea={true} ></LabelDataText>
                </>
                }

                actionBottom={<VisualizeDataButtonReschedule onClick={() => { }} />}
            />
        </div>
    )
}
export default FormExampleVisualize