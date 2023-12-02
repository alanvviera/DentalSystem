"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Background from "../../components/Background";
import CustomForm from "../../components/form/CustomForm";
import { CustomInput } from "../../components/form/CustomInput";
import { patternEmail, patternPassword } from "../../constants/formPattern";
import { CustomInputPassword } from "../../components/form/CustomInputPassword";
import { SignInOptions } from "../../components/login/SignInOptions";
import { getCookie } from "cookies-next";
import { CustomAlert } from "../../components/CustomAlert";

export default function Login() {
  const { push } = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    //const {ok} = await signIn('credentials', {email, password, redirect: false})
    const { ok } = await fetch(
      `/alt-api/login`,
      {
        method: "POST",
        body: JSON.stringify( {email, password})
      }
    );
    if (ok) {
      push("/menu");
    } else {
      setShowError(true);
    }
  };

  return (
    <main>
      <Background />
      <CustomForm
        topComponent={null}
        onSubmit={handleSubmit}
        title={"Inicia sesión"}
        subTile={"Con una cuenta existente."}
        textSubmit={"Inicia sesión"}
        textForgetPassword={"¿Olvidaste tu contraseña?"}
        inputsForm={[
          <CustomInput
            type={"email"}
            placeholder={"Correo electrónico"}
            name={"email"}
            formTextError={"Por favor ingrese un correo válido."}
            pattern={patternEmail}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />,
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"Contraseña"}
            pattern={patternPassword}
            placeholderError={
              "La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."
            }
            toggleShowPassword={() => setShowPassword(!showPassword)}
            password={password}
            onChange={(event) => setPassword(event.target.value)}
          />,
          <CustomAlert showAlert={showError} title={"Error"} subtile={"Usuario y/o contraseña incorrectos"} />
        ]}
        bottomComponent={<SignInOptions />}
      />
    </main>
  );
}
