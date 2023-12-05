"use client";

import { Alert } from "@mantine/core";
import MantineForm from "../mantine-form/MantineForm";
import CustomInputMantine, {
  typeInputForm,
} from "../mantine-form/customMantineInput";
import {
  validaFieldsNotEmpty,
  validateDate,
  validateEmail,
  validateName,
  validateNumberTel,
  validatePassword,
} from "../mantine-form/valuesValidate";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { employeeInfo } from "../../constants/constants";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";

const EmployeeForm = ({spinner}) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  return (
    <section>
      <MantineForm
        initialValuesForKeys={{
          name: "",
          last_name: "",
          email: "",
          password: "",
          repeatPassword: "",
          phone_number: "",
          home_address: "",
          birthday: "",
          gender: "",
          charge: "",
          study_level: "",
        }}
        validateForKeys={{
          name: validateName,
          last_name: validateName,
          email: validateEmail,
          password: validatePassword,
          repeatPassword: validatePassword,
          phone_number: validateNumberTel,
          home_address: validaFieldsNotEmpty,
          birthday: validateDate,
          gender: validaFieldsNotEmpty,
          charge: validaFieldsNotEmpty,
          study_level: validaFieldsNotEmpty,
        }}
        listCustomInputMantine={[
          new CustomInputMantine(
            "Nombre *",
            "Nombre",
            "name",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Apellidos *",
            "Apellidos",
            "last_name",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Correo electrónico *",
            "Correo electrónico",
            "email",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Contraseña *",
            "Contraseña",
            "password",
            typeInputForm.PASSWORD
          ),
          new CustomInputMantine(
            "Confirma tu contraseña *",
            "",
            "repeatPassword",
            typeInputForm.PASSWORD
          ),
          new CustomInputMantine(
            "Número de teléfono *",
            "Ejemplo: 646-123-45-67",
            "phone_number",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Dirección de domicilio *",
            "Dirección de domicilio",
            "home_address",
            typeInputForm.TEXT
          ),
          new CustomInputMantine(
            "Fecha de nacimiento *",
            "Fecha",
            "birthday",
            typeInputForm.DATEPICKER,
          ),
          new CustomInputMantine(
            "Sexo *",
            "Sexo",
            "gender",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            ["Masculino", "Femenino"]
          ),
          new CustomInputMantine(
            "Cargo *",
            "Cargo",
            "charge",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            employeeInfo.CLINIC_POSITIONS
          ),
          new CustomInputMantine(
            "Grado de estudios *",
            "Grado de estudios",
            "study_level",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            employeeInfo.ACADEMIC_DEGREES
          ),
        ]}
        onSubmit={async (form: any) => {
          setError(null);
          const {values: {email, password}} = form;
          const {values: {repeatPassword, birthday,...predata}} = form
          const formattedBirthday = new Date(birthday);
          const data = {birthday:formattedBirthday,...predata};
          spinner.open();
          const response = await fetch(`/api/auth/employeesignup`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
          });
          const login = await response.json();
          if (login.error) {
            setError(login.error);
            notifications.show({
              color: "red",
              title: "Error",
              message: "Al intentar crear el usuario.",
            })
          }
          else{
            notifications.show({
              title: email,
              message: "Usuario creado exitosamente.",
            })
            const responseNextAuth = await signIn("credentials", {
              email,
              password,
              redirect: false,
            });
            if(responseNextAuth.error) {
              setError("Error al generar la sesión. Vuelve a intentarlo más tarde.")
            }
            else{
              router.push("/menu");
            }
          }
          spinner.close();
        }}
        labelSubmit="Registrar"
      />
      {error && (
        <Alert
          mt="lg"
          variant="light"
          color="red"
          title="Error"
          icon={<InfoCircleOutlined />}
        >
          {error}
        </Alert>
      )}
    </section>
  );
};

export default EmployeeForm;
