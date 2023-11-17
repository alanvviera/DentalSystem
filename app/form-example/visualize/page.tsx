"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import { Button, Space, Title } from '@mantine/core';
import FormExampleUpdate from '../update/page';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import FormExampleCreate from '../create/page';
import VisualizeData from '../../../components/visualize-data/VisualizeData';
import VisualizeDataButton from '../../../components/visualize-data/buttonsData/VisualizeDataButton';
import LabelDataText from '../../../components/visualize-data/labelsData/LabelDataText';

const FormExampleVisualize = () => (
    <div className='m-5'>
      <VisualizeData
        actionsTop={
          <>
            <VisualizeDataButton
              showComponent={<FormExampleUpdate />}
              title={"Editar"}
              classNameButton={{
                variant: "gradient",
                gradient: { from: 'blue', to: 'cyan', deg: 137 },
                color: 'blue'
              }}
              icon={<EditFilled style={{ color: "white", fontSize: "15px" }} />}
            />
            <Space w={"4px"} />
            <VisualizeDataButton
              titleModal={"Aqui va el titulo del modal"}
              showComponent={<FormExampleCreate />}
              title={"Eliminar"}
              classNameButton={{
                variant: "gradient",
                gradient: { from: 'red', to: 'pink', deg: 234 },
                color: 'red'
              }}
              icon={<DeleteFilled style={{ color: "white", fontSize: "15px" }} />}
            />
          </>
        }
        content={
          <>
            <Title order={4} className='text-center font-bold' c="dimmed">Detalles de la cita</Title>
            <LabelDataText title='Ricardo arjona' type='Nombre del cliente' />
            <LabelDataText title='Clinica sin dientes' type='Clinica' />
            <LabelDataText title='Extracíon de muelas' type='Tipo de cita' />
            <LabelDataText title='Ricardo milos' type='Nombre del dentista' />
            <LabelDataText title='25 de julio del 2023' type='Fecha' />
            <LabelDataText title='1:40 PM' type='Hora' />
            <LabelDataText title='Debe de ser atentido por el doctor Similares del consultorio 8' type='Descripción' />
          </>
        }
        actionBottom={<Button fullWidth>Reprogramar cita</Button>}
      />
    </div>
  );

export default FormExampleVisualize;
