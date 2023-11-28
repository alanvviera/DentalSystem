"use client";
import React from "react";
import MantineForm from "../../mantine-form/MantineForm";
import CustomInputMantine, {
  typeInputForm,
} from "../../mantine-form/customMantineInput";
import {
  allValuesAvailable,
  validaFieldsNotEmpty,
  validateDate,
  validateName,
  validateNumber,
} from "../../mantine-form/valuesValidate";

const EmployeeAppointmentUpdate = ({ appointment, clinicList, typeList }) => (
  <div className="m-5">
    <MantineForm
      initialValuesForKeys={appointment}
      validateForKeys={{
        client_name: validateName,
        local_name: validaFieldsNotEmpty,
        type: validaFieldsNotEmpty,
        doctor_name: validateName,
        date: allValuesAvailable,
        status: validaFieldsNotEmpty,
        hour: allValuesAvailable,
        subject: allValuesAvailable,
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
          "",
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
        new CustomInputMantine("Fecha", "", "date", typeInputForm.TEXT),
        new CustomInputMantine("Hora", "", "hour", typeInputForm.TEXT),
        new CustomInputMantine(
          "Estado de la cita",
          "Estado...",
          "status",
          typeInputForm.SELECTITEMS,
          undefined,
          undefined,
          undefined,
          ["Pendiente", "En curso", "Completada", "Cancelada"]
        ),
        new CustomInputMantine(
          "Descripción",
          "",
          "subject",
          typeInputForm.TEXT
        ),
      ]}
      onSubmit={async (form: any) => {
        // All fields were validated
        console.log(form.values);
        const {
          client_name,
          local_name,
          type,
          doctor_name,
          date,
          status,
          hour,
          subject,
        } = form.values;
        /*
            const response = await fetch(route, {
              method: "PUT",
              body: JSON.stringify(
                {
                  client_name,
                  local_name,
                  type,
                  doctor_name,
                  date,
                  status,
                  hour,
                  subject
                }
              ),
            });
            return response.json();
        */
      }}
      labelSubmit="Guardar cambios"
    />
  </div>
);

export default EmployeeAppointmentUpdate;
