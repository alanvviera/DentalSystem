"use client";
import React from 'react';
import MantineForm from '../../../components/mantine-form/MantineForm';
import CustomInputMantine, { typeInputForm } from '../../../components/mantine-form/customMantineInput';
import { allValuesAvailable, validateDate, validateName, validateNumber } from '../../../components/mantine-form/valuesValidate';

const FormExampleUpdate = () => (
    <div className='m-5'>
      <MantineForm
        title={"Actualizar paciente"}
        initialValuesForKeys={{
          client: "Ricardo arjona",
          clinic: "Clinica sin dientes",
          appointmentType: "Extracíon de muelas",
          nameDentist: "Ricardo milos",
          date: "1701388800000",
          hours: "14640000",
          description: "Debe de ser atentido por el doctor Similares del consultorio 8"
        }}
        validateForKeys={{
          client: validateName,
          clinic: allValuesAvailable,
          appointmentType: allValuesAvailable,
          nameDentist: validateName,
          date: validateDate,
          hours: validateNumber,
          description: allValuesAvailable
        }}
        listCustomInputMantine={[
          new CustomInputMantine("Nombre del paciente", "Un nombre", "client", typeInputForm.TEXT),
          new CustomInputMantine("Nombre de la clinica", "Clinica", "clinic", typeInputForm.TEXT),
          new CustomInputMantine("Tipo de la cita", "Tipo de la cita", "appointmentType", typeInputForm.TEXT),
          new CustomInputMantine("Nombre del dentista", "El nombre del dentista", "nameDentist", typeInputForm.TEXT),
          new CustomInputMantine("Fecha", "Fecha", "date", typeInputForm.DATEPICKER, new Date(1701388800000)),
          new CustomInputMantine("Hora", "Hora", "hours", typeInputForm.DATETIME, new Date(14640000)),
          new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
        ]}
        onSubmit={(form: any) => {
          // All fields were validated
          console.log(form.values);
          form.setInitialValues();
        }}
        labelSubmit='Crear'
      />
    </div>
  );

export default FormExampleUpdate;
