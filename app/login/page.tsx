"use client";
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useForm } from '../../hooks';
import { useState } from 'react';
import Background from "../../components/Background";
import CustomForm from "../../components/form/CustomForm";
import { CustomInput } from "../../components/form/CustomInput";
import { patternEmail, patternPassword } from "../../constants/formPattern";
import { CustomInputPassword } from "../../components/form/CustomInputPassword";
import { SignInOptions } from "../../components/login/SignInOptions";
import { signIn } from 'next-auth/react';

export default function Login() {

  const {push} = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {ok} = await signIn('credentials', {email, password, redirect: false})

    if(ok)
    {
      push('/dashboard')
    }
    else
    {
      console.log('No son tus credenciales pendejo')
    }
  };

  return (
    <main>
      <Background />
      {/* form */}
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
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={() => setShowPassword(!showPassword)}
            password={password}
            onChange={(event) => setPassword (event.target.value)}
          />
        ]
        }
        bottomComponent={<SignInOptions callbackUrl="/"/>}
      />
    </main>
  );
}

