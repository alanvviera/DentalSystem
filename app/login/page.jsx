/**
 * This component is the login page.
 */

"use client";
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import CustomForm from "@/components/form/CustomForm";
import { CustomInput } from "@/components/form/CustomInput";
import { patternEmail, patternPassword } from "@/constants/formPattern";
import { CustomInputPassword } from "@/components/form/CustomInputPassword";
import { SignInOptions } from "@/components/login/SignInOptions";
export default function Login() {
  // Get search parameters from the URL
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || "/";

  // Check the user's session status
  const { status } = useSession();
  const router = useRouter();

  // Redirect the user if they are already authenticated
  if (status !== 'loading' && status === 'authenticated') {
    router.push('/');
  }

  // Manage form fields
  const { email, password, showPassword, onChange, cleanFields } = useForm({
    email: "",
    password: "",
    showPassword: false,
  });

  // Toggle password visibility
  const toggleShowPassword = () => {
    onChange({
      target: {
        name: "showPassword",
        value: !showPassword,
      },
    });
  };

  /**
   * Handle form submission.
   * @param {Event} e - Form submission event.
   */
  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when validations are correct and the form is submitted
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
        bottomComponent={<SignInOptions callbackUrl={callbackUrl}/>}
      />
    </main>
  );
}
