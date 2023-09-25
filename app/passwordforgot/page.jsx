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
      <section className="flex flex-col justify-center min-h-[100vh]">
        {/* body */}
        <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          {/* container */}
          <form
            className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
          >
            <header className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">
                ¿Ha olvidado su contraseña?
              </span>
              <p className="text-[#7C6666] text-lg">
                escriba su dirección de correo electrónico.
              </p>
            </header>
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <div>
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
                {!isEmailValid && email !== "" && (
                  <FormTextError text="Por favor ingrese un correo válido." />
                )}
              </div>
            </section>
            <Link
              href={isEmailValid ? "newpassword/" : ""}
              className="w-full flex-grow "
            >
              <p>
                <button
                  type="submit"
                  disabled={!isEmailValid || email === ""}
                  className={`bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] group-invalid:pointer-events-none group-invalid:opacity-30 ${
                    !isEmailValid || email === ""
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Continuar
                </button>
              </p>
            </Link>
          </form>
          <section className="bg-tertiary p-4 text-base text-center">
            {" "}
            {/* form-footer */}
            <p>
              ¿No tienes una cuenta?{" "}
              <Link
                href="signup"
                className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
              >
                Crea una
              </Link>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
