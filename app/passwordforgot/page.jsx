"use client";
import Link from "next/link";
import React from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import FormTextError from "@/components/form/FormTextError";
import Background from "@/components/Background";
import { useForm } from "@/hooks/useForm";

export default function PasswordForgot() {
  const {
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    onChange,
    cleanFields,
  } = useForm({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
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

  const handlePasswordChange = (e) => {
    onChange(e);
  };

  const handleConfirmPasswordChange = (e) => {
    onChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    console.log(
      `this is the new password: ${formState.password}, this is the confirm password: ${formState.confirmPassword}`
    );
    cleanFields();
  };

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-[100vh]">
        {/* container */}
        <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          <form
            className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
          >
            <header className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">
                ¿Ha olvidado su contraseña?
              </span>
              <p className="text-[#7C6666] text-lg">
                Introduzca una nueva contraseña que utilizará para iniciar
                sesión.
              </p>
            </header>
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <section className="relative">
                <article className="grid grid-cols-1">
                  <input
                    className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff] pr-10 peer"
                    type={showPassword ? "text" : "password"}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
                    placeholder="Nueva contraseña"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <FormTextError text="La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial." />
                  {password && (
                    <button
                      className="absolute right-0 top-0 px-2 py-1 border rounded"
                      onClick={toggleShowPassword}
                      type="button"
                      style={{ border: "none" }}
                    >
                      {showPassword ? (
                        <EyeInvisibleOutlined />
                      ) : (
                        <EyeOutlined />
                      )}
                    </button>
                  )}
                </article>
              </section>
              <section className="relative">
                <article className="grid grid-cols-1">
                  <input
                    className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff] pr-10 peer"
                    type={showConfirmPassword ? "text" : "password"}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
                    placeholder="Confirme la contraseña"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <FormTextError text="La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial." />
                  {confirmPassword && (
                    <button
                      className="absolute right-0 top-0 px-2 py-1 border rounded"
                      onClick={toggleShowConfirmPassword}
                      type="button"
                      style={{ border: "none" }}
                    >
                      {showConfirmPassword ? (
                        <EyeInvisibleOutlined />
                      ) : (
                        <EyeOutlined />
                      )}
                    </button>
                  )}
                </article>
              </section>
            </section>
            <button
              disabled
              className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              Enviar
            </button>
          </form>
          <section className="bg-tertiary p-4 text-base text-center">
            {" "}
            {/* form-footer */}
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="login/"
                className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
              >
                Inicia sesión
              </Link>
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
