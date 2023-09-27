"use client";
import Background from "@/components/Background";

export default function ErrorPage() {
    return (
        <main>
            <Background/>
            <section className="flex flex-col justify-center min-h-screen bg-secondary lg:bg-transparent">
        <div className="text-center">
          <span className="font-bold text-primary text-8xl">
            Error 404
          </span>
        </div>
        <div className="text-center mt-4">
          <span className="font-bold text-primary text-4xl">
            Página no encontrada
          </span>
        </div>
      </section>
        </main>
    )

}
