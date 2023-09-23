"use client";
import Link from "next/link";
import React, { useState } from "react";

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
    <div>
      <section>
        <div className=""></div> {/* top-wave */}
        <div className=""></div> {/* bottom-wave */}
      </section>
      <div className="flex flex-col justify-center min-h-[100vh]">
        {/* body */}
        <div className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          {/* container */}
          <form className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6">
            <div className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">
                ¿Ha olvidado su contraseña?
              </span>
              <p className="text-[#7C6666] text-lg">
                Introduzca una nueva contraseña que utilizará para iniciar
                sesión.
              </p>
            </div>
            <div className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <div className="relative">
                <input
                  className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff]"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nueva contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {password && (
                  <button
                    className="absolute right-4 top-2 px-2 py-1 border rounded"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                )}
              </div>
              <div className={`bg-[#fff] p-2`}></div>
              <div className="relative">
                <input
                  className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff]"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme la contraseña"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {confirmPassword && (
                  <button
                    className="absolute right-4 top-2 px-2 py-1 border rounded"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    type="button"
                  >
                    {showConfirmPassword ? "Ocultar" : "Mostrar"}
                  </button>
                )}
              </div>
            </div>
            <button className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]">
              Enviar
            </button>
          </form>
          <div className="bg-tertiary p-4 text-base text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
