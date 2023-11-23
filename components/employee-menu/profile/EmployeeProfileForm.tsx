"use client";
import { Button, Title } from "@mantine/core";
import React from "react";
import MantineForm from "../../mantine-form/MantineForm";
import {
  allValuesAvailable,
  validateDate,
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../mantine-form/customMantineInput";

const EmployeeProfileForm = ({ profile }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Title>Perfil</Title>
      <MantineForm
        initialValuesForKeys={profile}
        validateForKeys={{
          name: validateName,
          email: validateEmail,
          phone: validateNumber,
          password: validatePassword,
          birthDate: validateDate,
          address: allValuesAvailable,
          license: allValuesAvailable,
        }}
        listCustomInputMantine={[
          new CustomInputMantine(
            "Nombre completo",
            "",
            "name",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Correo electrónico",
            "",
            "email",
            typeInputForm.TEXT
          ),
          new CustomInputMantine("Teléfono", "", "phone", typeInputForm.NUMBER),
          new CustomInputMantine(
            "Contraseña",
            "",
            "password",
            typeInputForm.PASSWORD
          ),
          new CustomInputMantine(
            "Fecha de nacimiento",
            "",
            "birthDate",
            typeInputForm.DATEPICKER,
            new Date(1701388800000)
          ),
          new CustomInputMantine(
            "Dirección",
            "",
            "address",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Licencia médica",
            "",
            "license",
            typeInputForm.TEXT
          ),
        ]}
        onSubmit={(form: any) => {
          // All fields were validated
          console.log(form.values);
          const {
            name,
            email,
            phone,
            password,
            birthDate,
            address,
            license,
          } = form.values;
          /*
          const response = await fetch(route, {
            method: "PUT",
            body: JSON.stringify(
              {
                name,
                email,
                phone,
                password,
                birthDate,
                address,
                license,
              }
            ),
          });
          return response.json();
      */
        }}
        labelSubmit="Confirmar cambios"
      />
      <Button variant="default" fullWidth mt={10}>
        Cancelar
      </Button>
    </div>
  );
};

export default EmployeeProfileForm;
