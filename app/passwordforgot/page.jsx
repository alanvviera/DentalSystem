"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import FormTextError from "@/components/form/FormTextError";

export default function PasswordForgot() {
  const { email, onChange, cleanFields } = useForm({
    email: "",
  });

  const isEmailValid =
    /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

  function onSubmit(e) {
    e.preventDefault();

    if (isEmailValid) {
      // This is the code that is executed when the validations are correct and the form is submitted.
      console.log(`This is the email: ${email}`);
      cleanFields();
      // Redirect here if necessary
    }
  }

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-[100vh] bg-secondary lg:bg-transparent">
        {/* form container */}
        <article className="relative  w-full lg:max-w-[30vw] lg:min-h-min lg:rounded-2xl  overflow-hidden m-auto lg:bg-secondary">
          {" "}
          <form
            className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
          >
            {/* form header */}
            <header className="flex flex-col gap-4">
              {" "}
              <span className="font-bold text-black text-2xl">
                ¿Ha olvidado su contraseña?
              </span>
              <p className="text-[#7C6666] text-lg">
                escriba su dirección de correo electrónico.
              </p>
            </header>
            {/* inputs */}
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              <input
                className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                type="email"
                placeholder="Correo electrónico"
                name="email"
                onChange={onChange}
                value={email}
                required   
               pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
               />
              {!isEmailValid && email !== "" && (<FormTextError text="Por favor ingrese un correo válido." />)}
            </section>
            <Link
              href={isEmailValid ? "successfulemail/" : ""}
              className="w-full flex-grow "
            >
              <button
                type="submit"
                disabled={!isEmailValid || email === ""}
                className={`bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
                text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] 
                group-invalid:pointer-events-none group-invalid:opacity-30 ${
                  !isEmailValid || email === ""
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Continuar
              </button>
            </Link>
          </form>
          {/* form-footer */}
          <section className="w-full bg-tertiary p-4 text-base text-center md:bottom-0 md:min-h-[50px] md:rounded-lg">
            {" "}
            <p>
              Regresar e{" "}
              <Link
                href="login/"
                className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
              >
                Iniciar sesión
              </Link>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
