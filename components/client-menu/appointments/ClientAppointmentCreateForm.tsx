"use client";
import React from "react";
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";
import MantineForm from "../../mantine-form/MantineForm";
import { validaFieldsNotEmpty, validateDate, validateNumber } from "../../mantine-form/valuesValidate";
import CustomInputMantine, { typeInputForm } from "../../mantine-form/customMantineInput";
import {useRouter} from 'next/navigation';
import { notifications } from "@mantine/notifications";

const ClientAppointmentCreateForm = ({ doctorList, clinicList, typeList }) => {
  const router = useRouter();
  return (
  <>
    <Button
      px={0}
      component="a"
      href="/menu/appointments"
      leftSection={<ArrowLeftOutlined />}
      variant="subtle"
    >
      Volver a Citas
    </Button>
    <Title>Programar cita</Title>
    <MantineForm
      initialValuesForKeys={{
        local_name: "",
        type: "",
        date: "",
        doctor_name: "",
        hour: "",
        subject: "",
      }}
      validateForKeys={{
        local_name: validaFieldsNotEmpty,
        type: validaFieldsNotEmpty,
        date: validateDate,
        doctor_name: validaFieldsNotEmpty,
        hour: validateNumber,
        subject: validaFieldsNotEmpty,
      }}
      listCustomInputMantine={[
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
          "Seleccionar doctor",
          "doctor_name",
          typeInputForm.SELECTITEMS,
          undefined,
          undefined,
          undefined,
          doctorList
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
          type,
          date,
          hour,
          subject,
          local_name: id_local_fk,
          doctor_name: id_doctor_fk
        } = form.values;
        const fetchData = await fetch("api/clientcheckappointment", {
            method: "POST",
            body: JSON.stringify(
              {
                id_local_fk,
                type,
                date,
                id_doctor_fk,
                hour,
                subject
              }
            ),
          });
          const response = await fetchData.json();
          if (response.error) {
            notifications.show({
              color: "red",
              title: "Error",
              message: "Al intentar crear la cita",
            });
          }
          else{
            notifications.show({
              title: "Cita creada exitosamente",
              message: "Redirigiendo a Citas.",
            });
            router.push("menu/appointments");
          }
      }}
      labelSubmit="Crear"
    />
    <Button
      variant="default"
      component="a"
      href="/menu/appointments"
      fullWidth
      mt={10}
    >
      Cancelar
    </Button>
  </>)
};

export default ClientAppointmentCreateForm;
