"use client"
import { Button, Box } from '@mantine/core'
import React from 'react'
import MantineForm from '../../../components/mantine-form/MantineForm';
import { allValuesAvailable, validateDate, validateEmail, validateName, validateNumber, validatePassword } from '../../../components/mantine-form/valuesValidate';
import CustomInputMantine, { typeInputForm } from '../../../components/mantine-form/customMantineInput';

const EmployeeProfilePage = () => {
  return (
    <Box px={10}>
      <MantineForm
        initialValuesForKeys={{
          name: "Elton Tito",
          email: "example@contoso.com",
          phone: "6462537892",
          password: "ricardomilos",
          birthDate: "1701388800000",
          address: "Colonita",
          license: "Licencia medica",
        }}
        validateForKeys={{
          name: validateName,
          email: validateEmail,
          phone: validateNumber,
          password: validatePassword,
          birthDate: validateDate,
          address: allValuesAvailable,
          license: allValuesAvailable
        }}
        listCustomInputMantine={[
          new CustomInputMantine("Nombre completo", "", "name", typeInputForm.TEXT),
          new CustomInputMantine("Correo electrónico", "", "email", typeInputForm.TEXT),
          new CustomInputMantine("Teléfono", "", "phone", typeInputForm.NUMBER),
          new CustomInputMantine("Contraseña", "", "password", typeInputForm.PASSWORD),
          new CustomInputMantine("Fecha de nacimiento", "", "birthDate", typeInputForm.DATEPICKER, new Date(1701388800000)),
          new CustomInputMantine("Dirección", "", "address", typeInputForm.TEXT),
          new CustomInputMantine("Licencia médica", "", "license", typeInputForm.TEXT),
        ]}
        onSubmit={(form: any) => {
          // All fields were validated
          console.log(form.values);
          form.setInitialValues();
        }}
        labelSubmit='Confirmar cambios'
      />
      <Button variant='default' fullWidth mt={10}>Cancelar</Button>
    </Box>
  )
}

export default EmployeeProfilePage;