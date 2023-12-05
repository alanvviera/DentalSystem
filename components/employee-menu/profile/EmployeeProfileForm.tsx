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
  validateNumberTel,
  validatePassword,
} from "../../mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../mantine-form/customMantineInput";
import { doctorInfo } from "../../../constants/constants";

const EmployeeProfileForm = ({ profile }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Title>Perfil</Title>
      <MantineForm
        initialValuesForKeys={profile}
        validateForKeys={{
          name: validateName,
          last_name: validateName,
          email: validateEmail,
          phone: validateNumberTel,
          password: validatePassword,
          birthDate: validateDate,
          address: allValuesAvailable,
          license: allValuesAvailable,
          speciality: allValuesAvailable,
          school: allValuesAvailable
        }}
        listCustomInputMantine={[
          new CustomInputMantine(
            "Nombre",
            "",
            "name",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Apellido",
            "",
            "last_name",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Correo electrónico",
            "",
            "email",
            typeInputForm.TEXT
          ),
          new CustomInputMantine("Teléfono", "Ejemplo: 646-123-45-67", "phone", typeInputForm.TEXT),
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
            new Date(profile.birthDate),
            undefined,
            undefined, undefined,
          ),
          new CustomInputMantine(
            "Dirección",
            "",
            "address",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Especialidad *",
            "Especialidad",
            "specialty",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            doctorInfo.SPECIALTIES
          ),
          new CustomInputMantine(
            "Licencia médica *",
            "Licencia médica",
            "license",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            doctorInfo.MEDICAL_LICENSES
          ),
          new CustomInputMantine(
            "Facultad *",
            "Facultad",
            "school",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            doctorInfo.FACULTIES
          ),
        ]}
        onSubmit={(form: any) => {
          // All fields were validated
          console.log(form.values);
          const {
            name,
            email,
            last_name,
            phone,
            password,
            birthDate,
            address,
            license,
            specialty,
            school
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
