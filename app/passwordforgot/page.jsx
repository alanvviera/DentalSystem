"use client";
import Link from "next/link";
import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Background from "@/components/Background";

export default function PasswordForgot() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main>
      <Background/>
      <section className="flex flex-col justify-center min-h-[100vh]">
        {/* container */}
        <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          <form className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6">
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
                    className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff] pr-10"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nueva contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {password && (
                    <button
                      className="absolute right-0 top-0 px-2 py-1 border rounded"
                      onClick={() => setShowPassword(!showPassword)}
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
                    className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff] pr-10"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme la contraseña"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {confirmPassword && (
                    <button
                      className="absolute right-0 top-0 px-2 py-1 border rounded"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      type="button"
                      style={{ border: "none" }} // Elimina el borde
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
            <button className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]">
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
