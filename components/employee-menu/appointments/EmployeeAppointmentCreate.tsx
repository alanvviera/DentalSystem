"use client";
import React from "react";
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from "../../mantine-form/MantineForm";
import { validaFieldsNotEmpty, validateDate, validateNumber } from "../../mantine-form/valuesValidate";
import CustomInputMantine, { typeInputForm } from "../../mantine-form/customMantineInput";

const EmployeeAppointmentCreate = ({clinicList, typeList}) => (
  <>
    <Button
      px={0}
      component="a"
      href="/employee-menu/appointments"
      leftSection={<ArrowLeftOutlined />}
      variant="subtle"
    >
      Volver a Citas
    </Button>
    <Title>Programar cita</Title>
    <MantineForm
      initialValuesForKeys={{
        client_name: "",
        local_name: "",
        type: "",
        date: "",
        doctor_name: "",
        hour: "",
        subject: "",
      }}
      validateForKeys={{
        client_name: validaFieldsNotEmpty,
        local_name: validaFieldsNotEmpty,
        type: validaFieldsNotEmpty,
        date: validateDate,
        doctor_name: validaFieldsNotEmpty,
        hour: validateNumber,
        subject: validaFieldsNotEmpty,
      }}
      listCustomInputMantine={[
        new CustomInputMantine(
          "Cliente",
          "",
          "client_name",
          typeInputForm.TEXT
        ),
        new CustomInputMantine(
          "Clínica",
          "Seleccionar clínica",
          "local_name",
          typeInputForm.SELECTITEMS,
          undefined,
          undefined,
          undefined,
          clinicList
        ),
        new CustomInputMantine(
          "Tipo de cita",
          "Tipo de cita",
          "type",
          typeInputForm.SELECTITEMS,
          undefined,
          undefined,
          undefined,
          typeList
        ),
        new CustomInputMantine(
          "Atiende",
          "",
          "doctor_name",
          typeInputForm.TEXT
        ),
        new CustomInputMantine(
          "Fecha",
          "Fecha",
          "date",
          typeInputForm.DATEPICKER,
          undefined,
          undefined,
          undefined,
          undefined,
          new Date()
        ),
        new CustomInputMantine("Hora", "", "hour", typeInputForm.DATETIME),
        new CustomInputMantine(
          "Descripción",
          "",
          "subject",
          typeInputForm.TEXT
        ),
      ]}
      onSubmit={async (form: any) => {
        console.log(form.values);
        const {
          client_name,
          local_name,
          type,
          date,
          doctor_name,
          hour,
          subject,
        } = form.values;
        /*
          const response = await fetch(route, {
            method: "POST",
            body: JSON.stringify(
              {
                client_name,
                local_name,
                type,
                date,
                doctor_name,
                hour,
                subject
                status: "Pendiente"
              }
            ),
          });
          return response.json();
      */
      }}
      labelSubmit="Crear"
    />
    <Button
      variant="default"
      component="a"
      href="/employee-menu/appointments"
      fullWidth
      mt={10}
    >
      Cancelar
    </Button>
  </>
);

export default EmployeeAppointmentCreate;
