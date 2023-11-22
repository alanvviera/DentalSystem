"use client";
import React from "react";
import MantineForm from "../../../../components/mantine-form/MantineForm";
import {
  allValuesAvailable,
  validateDate,
  validateName,
  validateNumber,
} from "../../../../components/mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../../../components/mantine-form/customMantineInput";
import { Button, Title } from "@mantine/core";
import { ArrowLeftOutlined } from "@ant-design/icons";

const CreateAppointmentPage = () => (
  <main style={{ marginLeft: "20px", marginRight: "20px" }}>
    <Button px={0} component="a" href="/employee-menu/appointments" leftSection={<ArrowLeftOutlined />} variant="subtle">
      Volver a Citas
    </Button>
    <Title>Programar cita</Title>
    <MantineForm
      initialValuesForKeys={{
        patient_name: "",
        clinic_name: "",
        type: "",
        doctor_name: "",
        date_of_date: "",
        appointment_time: "",
        subject: "",
      }}
      validateForKeys={{
        patient_name: validateName,
        clinic_name: allValuesAvailable,
        type: allValuesAvailable,
        doctor_name: validateName,
        date_of_date: validateDate,
        appointment_time: validateNumber,
        subject: allValuesAvailable,
      }}
      listCustomInputMantine={[
        new CustomInputMantine(
          "Nombre del cliente",
          "",
          "patient_name",
          typeInputForm.TEXT
        ),
        new CustomInputMantine(
          "Seleccionar clínica",
          "",
          "clinic",
          typeInputForm.TEXT
        ),
        new CustomInputMantine("Tipo de cita", "", "type", typeInputForm.TEXT),
        new CustomInputMantine(
          "Nombre del dentista",
          "",
          "doctor_name",
          typeInputForm.TEXT
        ),
        new CustomInputMantine(
          "Fecha",
          "",
          "date_of_date",
          typeInputForm.DATEPICKER
        ),
        new CustomInputMantine(
          "Hora",
          "",
          "appointment_time",
          typeInputForm.DATETIME
        ),
        new CustomInputMantine(
          "Descripción",
          "",
          "subject",
          typeInputForm.TEXT
        ),
      ]}
      onSubmit={(form: any) => {
        // All fields were validated
        console.log(form.values);
        form.setInitialValues();
      }}
      labelSubmit="Crear"
    />
    <Button variant="default" component="a" href="/employee-menu/appointments"  fullWidth mt={10}>
      Cancelar
    </Button>
  </main>
);

export default CreateAppointmentPage;
