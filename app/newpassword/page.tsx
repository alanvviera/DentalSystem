"use client";
import React from "react";
import Background from "../../components/legacy/Background";
import { useForm } from "../../hooks/useForm";
import { patternPassword } from "../../constants/formPattern";
import { CustomAlert } from "../../components/legacy/CustomAlert";
import CustomForm from "../../components/legacy/form/CustomForm";
import { CustomInputPassword } from "../../components/legacy/form/CustomInputPassword";
import { LoginAccount } from "../../components/legacy/signup/LoginAccount";

export default function NewPassword() {
  const {
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    showPasswordNotMatch,
    onChange,
    cleanFields,
  } = useForm({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
  });

  const toggleShowPassword = () => {
    onChange({
      target: {
        name: "showPassword",
        value: !showPassword,
      },
    });
  };

  const toggleShowConfirmPassword = () => {
    onChange({
      target: {
        name: "showConfirmPassword",
        value: !showConfirmPassword,
      },
    });
  };

  const showMessageOfError = (value) => {
    onChange({
      target: {
        name: "showPasswordNotMatch",
        value: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      showMessageOfError(true);
      return;
    }
    showMessageOfError(false);

    // This is the code that is executed when the validations are correct and the form submit is executed
    console.log(
      `this is the new password: ${password}, this is the confirm password: ${confirmPassword}`
    );
    cleanFields();
  };

  return (
    <main>
      <Background />
      <CustomForm
        textForgetPassword={''}
        onSubmit={handleSubmit}
        title={" Reestablecer contraseña"}
        subTile={"Introduzca una nueva contraseña que utilizará para iniciar sesión."}
        textSubmit={"Enviar"}
        inputsForm={[
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"Nueva contraseña"}
            onChange={onChange}
            password={password}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={toggleShowPassword}
          />,
          <CustomInputPassword
            showPassword={showConfirmPassword}
            name={"confirmPassword"}
            placeholder={"Confirme la contraseña"}
            onChange={onChange}
            password={confirmPassword}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={toggleShowConfirmPassword}
          />

        ]
        }
        bottomComponent={<LoginAccount />}
        topComponent={<CustomAlert
          showAlert={showPasswordNotMatch}
          title={"Lo sentimos"}
          subtile={"Las contraseñas no coinciden."}
        />

        }
      />
    </main>
  );
}
