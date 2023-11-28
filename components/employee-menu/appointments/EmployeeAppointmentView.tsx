"use client";
import React from "react";
import VisualizeData from "../../visualize-data/VisualizeData";
import { Button, Space, Title } from "@mantine/core";
import { ArrowLeftOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
import VisualizeDataButton from "../../visualize-data/buttonsData/VisualizeDataButton";
import LabelDataText from "../../visualize-data/labelsData/LabelDataText";
import EmployeeAppointmentUpdate from "./EmployeeAppointmentUpdate";
import EmployeeAppointmentDelete from "./EmployeeAppointmentDelete";

const EmployeeAppointmentView = ({ appointment, clinicList, typeList }) => {
  const {
    id_appointments,
    client_name,
    local_name,
    type,
    doctor_name,
    date,
    hour,
    subject,
    status,
  } = appointment;
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
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
              titleModal="Reprogramar cita"
              showComponent={
                <EmployeeAppointmentUpdate appointment={appointment} clinicList={clinicList} typeList={typeList} />
              }
              title={"Editar"}
              classNameButton={{
                variant: "subtle",
                color: "blue",
              }}
              icon={<EditFilled style={{ fontSize: "20px" }} />}
            />
            <Space w={"4px"} />
            <VisualizeDataButton
              titleModal={"¿Desea eliminar este registro?"}
              showComponent={
                <EmployeeAppointmentDelete appointmentId={id_appointments} />
              }
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
            <LabelDataText title={client_name} type="Cliente" />
            <LabelDataText title={local_name} type="Clinica" />
            <LabelDataText title={type} type="Tipo de cita" />
            <LabelDataText title={doctor_name} type="Atiende" />
            <LabelDataText title={date} type="Fecha" />
            <LabelDataText title={hour} type="Hora" />
            <LabelDataText title={status} type="Estado de la cita" />
            <LabelDataText title={subject} type="Descripción" />
          </>
        }
      />
    </div>
  );
};

export default EmployeeAppointmentView;
