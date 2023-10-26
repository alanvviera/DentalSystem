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
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || "/"

  const {status} = useSession();
  const router = useRouter();

  if(status !== 'loading' && status === 'authenticated') {
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

  //Userinfo = Informacion de usuario lel
  const [userInfo, setUserInfo] = useState({email: '', password: ''})

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validacion de la userInfo
    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    });
  }

  // function onSubmit(e) {
  //   e.preventDefault();
  //   // This is the code that is executed when the validations are correct and the form submit is executed
  //   console.log(
  //     `This is the email: ${email}, this is the password: ${password}`
  //   );
  //   cleanFields();
  // }

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
            onChange={({target}) => 
            setUserInfo({ ...userInfo, email: target.value})}
            value={userInfo.email}
            pattern={patternEmail}
          />,
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"Contraseña"}
            onChange={({target}) => 
            setUserInfo({ ...userInfo, password: target.value})}
            password={userInfo.password}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={toggleShowPassword}
          />
        ]
        }
        bottomComponent={<SignInOptions callbackUrl={callbackUrl}/>}
      />
      {/* <button onClick={() => {
        signIn();
      }}></button> */}
    </main>
  );
}

