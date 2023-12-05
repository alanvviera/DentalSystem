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
import { doctorInfo } from "../../constants/constants";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";

const DoctorForm = ({spinner}) => {
  const [error, setError] = useState(null);
  const router = useRouter();
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
          license: "",
          specialty: "",
          school: "",
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
          license: validaFieldsNotEmpty,
          specialty: validaFieldsNotEmpty,
          school: validaFieldsNotEmpty,
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
            "Confirma tu contraseña",
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
            typeInputForm.DATEPICKER
          ),
          new CustomInputMantine(
            "Sexo *",
            "Sexo",
            "gender",
            typeInputForm.SELECTITEMS,
            undefined,
            undefined,
            undefined,
            ["Hombre", "Mujer"]
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
        onSubmit={async (form: any) => {
          setError(null);
          const {values: {email, password}} = form;
          const {
            values: { repeatPassword, birthday, ...predata },
          } = form;
          const formattedBirthday = new Date(birthday);
          const data = { birthday: formattedBirthday, ...predata };
          spinner.open();
          const response = await fetch(`/api/auth/doctorsignup`, {
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
            const responseNextAuth = await signIn("credentials", {
              email,
              password,
              redirect: false,
            });
            if(responseNextAuth.error) {
              setError("Error al generar la sesión. Vuelve a intentarlo más tarde.");
            }
            else{
              notifications.show({
                title: "Usuario creado exitosamente",
                message: "Redirigiendo a menu...",
              })
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

export default DoctorForm;
