"use client";
import Link from "next/link";
import Background from "@/components/Background";
import { useEffect, useState } from "react";
import {
  MailOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

export default function SuccessfulEmail() {
  const [state, setState] = useState({
    loading: true,
    success: false,
    email: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        loading: false,
        success: true,
      });
    }, 3000);
  }, []);

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-screen bg-secondary lg:bg-transparent">
        {/* Message container */}
        <article className="relative w-full max-w-[60%] mx-auto p-8 rounded-2xl overflow-hidden bg-secondary">
          {state.loading && (
            <section className="text-center py-8">
              <LoadingOutlined style={{ fontSize: "48px" }} />
              <p className="text-2xl mt-4">Cargando...</p>
            </section>
          )}
          {state.success && (
            <section className="text-center py-8">
              <MailOutlined className="text-9xl text-primary" />
              <p className="text-2xl mt-4">
                Se ha enviado un enlace de confirmación a tu correo electrónico.
              </p>
              <Link href="/login">
                <button className="bg-primary text-white py-3 px-6 mt-8 rounded-md text-xl">
                  <p>Regresar a Inicio de sesión</p>
                </button>
              </Link>
            </section>
          )}
        </article>
      </section>
    </main>
  );
}
