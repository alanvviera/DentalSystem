"use client";
import Link from "next/link";
import Background from "@/components/Background";
import { useEffect, useState } from "react";
import {
  CheckOutlined,
  LoadingOutlined,
  HomeOutlined,
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
    }, 3000); // Cambia el tiempo de espera según tus necesidades
  }, []);

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-screen bg-secondary lg:bg-transparent">
        {/* body */}
        <article className="relative w-full max-w-[60%] mx-auto p-8 rounded-2xl overflow-hidden bg-secondary">
          {state.loading && (
            <div className="text-center py-8">
              <LoadingOutlined style={{ fontSize: "48px" }} />
              <p className="text-2xl mt-4">Cargando...</p>
            </div>
          )}
          {state.success && (
            <div className="text-center py-8">
              <CheckOutlined style={{ fontSize: "48px", color: "green" }} />
              <p className="text-2xl mt-4">
                El correo se ha enviado de manera correcta.
              </p>
              <Link href="/login">
                <button className="bg-primary text-white py-3 px-6 mt-8 rounded-md text-xl">
                  <div className="flex items-center">
                    <HomeOutlined style={{ fontSize: "24px" }} />
                  </div>
                </button>
              </Link>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
