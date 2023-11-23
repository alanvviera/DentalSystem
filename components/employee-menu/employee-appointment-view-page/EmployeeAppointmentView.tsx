"use client"
import React from 'react'
import VisualizeData from '../../visualize-data/VisualizeData';
import { Button, Space, Title } from '@mantine/core';
import { ArrowLeftOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import VisualizeDataButton from '../../visualize-data/buttonsData/VisualizeDataButton';
import CreateAppointmentPage from '../../../app/employee-menu/appointments/create/page';
import FormExampleCreate from '../../../app/form-example/create/page';
import LabelDataText from '../../visualize-data/labelsData/LabelDataText';

const EmployeeAppointmentView = ({appointment}) => {
  return (<div style={{ marginLeft: "20px", marginRight: "20px" }}>
    <VisualizeData
      actionsTop={
        <>
          <Button
            component="a"
            href="/employee-menu/appointments"
            leftSection={<ArrowLeftOutlined />}
            variant="subtle"
          >
            Volver a Citas
          </Button>
          <VisualizeDataButton
            showComponent={<CreateAppointmentPage />}
            title={"Editar"}
            classNameButton={{
              variant: "subtle",
              color: "blue",
            }}
            icon={<EditFilled style={{ fontSize: "20px" }} />}
          />
          <Space w={"4px"} />
          <VisualizeDataButton
            titleModal={"Aqui va el titulo del modal"}
            showComponent={<FormExampleCreate/>}
            title={"Eliminar"}
            classNameButton={{
              variant: "subtle",
              color: "red.7",
            }}
            icon={<DeleteFilled style={{ fontSize: "20px" }} />}
          />
        </>
      }
      content={
        <>
          <Title>Detalles de la cita</Title>
          <LabelDataText title={appointment.patient_name} type="Cliente"/>
          <LabelDataText title={appointment.clinic_name} type="Clinica" />
          <LabelDataText title={appointment.type} type="Tipo de cita" />
          <LabelDataText title={appointment.doctor_name} type="Atiende" />
          <LabelDataText title={appointment.date_of_date} type="Fecha" />
          <LabelDataText title={appointment.appointment_time} type="Hora" />
          <LabelDataText
            title="Debe de ser atentido por el doctor Similares del consultorio 8"
            type="Descripción"
          />
        </>
      }
    />
  </div>);
}

export default EmployeeAppointmentView