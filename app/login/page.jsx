"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";

export default function Login() {

  const {email, password, onChange,cleanFields } = useForm({
    email: "",
    password: ""
  }
  );


  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    console.log(`This is the email: ${email}, this is the password: ${password}`);
    cleanFields();
  }

  return (
    <main>
      <section>
        <article className="top-wave"></article> {/* top-wave */}
        <article className="bottom-wave"></article> {/* bottom-wave */}
      </section>
      <section className="flex flex-col justify-center min-h-[100vh]">
        {/* body */}
        <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          {/* container */}
          <form className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6" onSubmit={onSubmit}>
            <header className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">Inicia sesión</span>
              <p className="text-[#7C6666] text-lg">
                Con una cuenta existente.
              </p>
            </header>
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <input
                className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                type="email"
                placeholder="Correo electrónico"
                name="email"
                onChange={onChange}
                value={email}
                required
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              />
              <input
                className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onChange}
                minLength={8}
                required

              />
            </section>
            <section>
              <p>
                <Link
                  href="passwordforgot/"
                  className="font-light text-[#0066ff] transition-all ease-in-out duration-3000"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </p>
            </section>
            <button type="submit" className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]">
              Inicia sesión
            </button>
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
