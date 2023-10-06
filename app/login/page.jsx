"use client";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CustomForm from "@/components/form/CustomForm";
import { CustomInput } from "@/components/form/CustomInput";
import { patternEmail, patternPassword } from "@/constans/formPattern";
import { CustomInputPassword } from "@/components/form/CustomInputPassword";
import { CreateAccount } from "@/components/login/CreateAccount";

export default function Login() {

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  const { email, password, showPassword, onChange, cleanFields } = useForm({
    email: "",
    password: "",
    showPassword: false,
  });

  const toggleShowPassword = () => {
    onChange({
      target: {
        name: "showPassword",
        value: !showPassword,
      },
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    console.log(
      `This is the email: ${email}, this is the password: ${password}`
    );
    cleanFields();
  }

  return (
    <main>
      <Background />
      {/* form */}
      <CustomForm
        onSubmit={onSubmit}
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
            onChange={onChange}
            value={email}
            pattern={patternEmail}
          />,
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"Contraseña"}
            onChange={onChange}
            password={password}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={toggleShowPassword}
          />
        ]
        }
        bottomComponent={<CreateAccount/>}
      />
    </main>
  );
}

