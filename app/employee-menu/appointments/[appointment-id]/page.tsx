"use client";
import React from "react";
import { Button, Space, Title } from "@mantine/core";
import VisualizeData from "../../../../components/visualize-data/VisualizeData";
import VisualizeDataButton from "../../../../components/visualize-data/buttonsData/VisualizeDataButton";
import FormExampleUpdate from "../../../form-example/update/page";
import { ArrowLeftOutlined, DeleteFilled, EditFilled } from "@ant-design/icons";
import FormExampleCreate from "../../../form-example/create/page";
import LabelDataText from "../../../../components/visualize-data/labelsData/LabelDataText";
import CreateAppointmentPage from "../create/page";

const FormExampleVisualize = () => (
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
          <LabelDataText title="Ricardo arjona" type="Nombre del cliente" />
          <LabelDataText title="Clinica sin dientes" type="Clinica" />
          <LabelDataText title="Extracíon de muelas" type="Tipo de cita" />
          <LabelDataText title="Ricardo milos" type="Nombre del dentista" />
          <LabelDataText title="25 de julio del 2023" type="Fecha" />
          <LabelDataText title="1:40 PM" type="Hora" />
          <LabelDataText
            title="Debe de ser atentido por el doctor Similares del consultorio 8"
            type="Descripción"
          />
        </>
      }
    />
  </div>
);

export default FormExampleVisualize;
