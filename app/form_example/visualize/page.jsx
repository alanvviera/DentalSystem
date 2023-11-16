"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button, Space, Title, } from '@mantine/core';
import VisualizeData from '@/components/visualizeData/VisualizeData';
import { LabelDataText } from '@/components/visualizeData/labelsData/LabelDataText';
import FormExampleUpdate from '../update/page';
import VisualizeDataButton from '@/components/visualizeData/buttonsData/VisualizeDataButton';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import FormExampleCreate from '../create/page';

const FormExampleVisualize = () => {
    const { data: session, status } = useSession();
    if (status === "loading") return <LoadingScreen />

    return (
        <div className='m-5'>
            <VisualizeData
                actionsTop={(<>
                    <VisualizeDataButton showComponent={<FormExampleUpdate />} title={"Editar"} classNameButton={{ variant: "gradient", gradient: { from: 'blue', to: 'cyan', deg: 137 }, color: 'blue' }} icon={<EditFilled style={{ color: "white", fontSize: "15px" }} />} />
                    <Space w={"4px"} />
                    <VisualizeDataButton titleModal={"Aqui va el titulo del modal"} showComponent={<FormExampleCreate />} title={"Eliminar"} classNameButton={{ variant: "gradient", gradient: { from: 'red', to: 'pink', deg: 234 }, color: 'red' }} icon={< DeleteFilled style={{ color: "white", fontSize: "15px" }} />} />
                </>)
                }
                content={<>
                    <Title order={4} className='text-center font-bold' c="dimmed" >Detalles de la cita</Title>
                    <LabelDataText title='Ricardo arjona' type='Nombre del cliente' ></LabelDataText>
                    <LabelDataText title='Clinica sin dientes' type='Clinica' ></LabelDataText>
                    <LabelDataText title='Extracíon de muelas' type='Tipo de cita' ></LabelDataText>
                    <LabelDataText title='Ricardo milos' type='Nombre del dentista' ></LabelDataText>
                    <LabelDataText title='25 de julio del 2023' type='Fecha' ></LabelDataText>
                    <LabelDataText title='1:40 PM' type='Hora' ></LabelDataText>
                    <LabelDataText title='Debe de ser atentido por el doctor Similares del consultorio 8' type='Descripción' ></LabelDataText>
                </>
                }
                actionBottom={<Button fullWidth  >Reprogramar cita</Button>}
            />
        </div>
    )
}
export default FormExampleVisualize