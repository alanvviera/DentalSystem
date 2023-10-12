"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import CustomForm from "@/components/form/CustomForm";
import { CustomInput } from "@/components/form/CustomInput";
import { patternEmail } from "@/constants/formPattern";
import { useRouter } from "next/navigation";

/**
 * Component for handling password reset requests.
 * @returns {JSX.Element} JSX element representing the password reset page.
 */
export default function PasswordForgot() {
  const router = useRouter();
  const { email, onChange, cleanFields } = useForm({
    email: "",
  });

  /**
   * Handle form submission.
   * @param {Event} e - Form submission event.
   */
  function onSubmit(e) {
    e.preventDefault();

    // This is the code that is executed when the validations are correct and the form is submitted.
    console.log(`This is the email: ${email}`);
    cleanFields();
    // Redirect here if necessary
    router.push("successful-email/");
  }

  return (
    <main>
      <Background />
      <CustomForm
        onSubmit={onSubmit}
        title={"¿Ha olvidado su contraseña?"}
        subTile={"Escriba su dirección de correo electrónico."}
        textSubmit={"Continuar"}
        inputsForm={[
          <CustomInput
            type={"email"}
            placeholder={"Correo electrónico"}
            name={"email"}
            formTextError={"Por favor ingrese un correo válido."}
            onChange={onChange}
            value={email}
            pattern={patternEmail}
          />
        ]
        }
        bottomComponent={
          <ReturnAndLogin/>
        }
      />
    </main>
  );
}

/**
 * Component for returning to the login page.
 */
export const ReturnAndLogin = () => {
  return (
    <section className="w-full bg-tertiary p-4 text-base text-center md:bottom-0 md:min-h-[50px] md:rounded-lg">
      <p>
        Regresar e {" "}
        <Link
          href="login/"
          className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
        >
          Iniciar sesión
        </Link>
      </p>
    </section>
  );
}
