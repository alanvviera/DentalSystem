"use client";
import React from 'react';
import MantineForm from '../../../components/mantine-form/MantineForm';
import CustomInputMantine, { typeInputForm } from '../../../components/mantine-form/customMantineInput';
import { allValuesAvailable, validateDate, validateName, validateNumber } from '../../../components/mantine-form/valuesValidate';

const EmployeeAppointmentUpdate = ({appointment}) => (
    <div className='m-5'>
      <MantineForm
        initialValuesForKeys={appointment}
        validateForKeys={{
          patient_name: validateName,
          clinic_name: allValuesAvailable,
          type: allValuesAvailable,
          doctor_name: validateName,
          date_of_date: allValuesAvailable,
          appointment_time: allValuesAvailable,
          subject: allValuesAvailable
        }}
        listCustomInputMantine={[
          new CustomInputMantine("Cliente", "", "patient_name", typeInputForm.TEXT),
          new CustomInputMantine("Clinica", "", "clinic_name", typeInputForm.TEXT),
          new CustomInputMantine("Tipo de cita", "", "type", typeInputForm.TEXT),
          new CustomInputMantine("Doctor", "", "doctor_name", typeInputForm.TEXT),
          new CustomInputMantine("Fecha", "", "date_of_date", typeInputForm.TEXT),
          new CustomInputMantine("Hora", "", "appointment_time", typeInputForm.TEXT),
          new CustomInputMantine("Descripción", "", "subject", typeInputForm.TEXT),
        ]}
        onSubmit={async (form: any) => {
          // All fields were validated
          console.log(form.values);
          const {
            patient_name,
            clinic_name,
            type,
            doctor_name,
            date_of_date,
            appointment_time,
            subject,
          } = form.values;
          /*
            const response = await fetch(route, {
              method: "PUT",
              body: JSON.stringify(
                {
                  patient_name,
                  clinic_name,
                  type,
                  doctor_name,
                  date_of_date,
                  appointment_time,
                  subject,
                }
              ),
            });
            return response.json();
        */
        }}
        labelSubmit='Guardar cambios'
      />
    </div>
  );

export default EmployeeAppointmentUpdate;
