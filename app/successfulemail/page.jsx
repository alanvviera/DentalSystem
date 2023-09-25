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
              <CheckOutlined style={{ fontSize: "48px", color: "green" }} />
              <p className="text-2xl mt-4">
                El correo se ha enviado correctamente.
              </p>
              <Link href="/login">
                <button className="bg-primary text-white py-3 px-6 mt-8 rounded-md text-xl">
                  <div className="flex items-center">
                    <HomeOutlined style={{ fontSize: "24px" }} />
                  </div>
                </button>
              </Link>
            </section>
          )}
        </article>
      </section>
    </main>
  );
}
