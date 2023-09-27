/**
 * Componente de página de error 404.
 * @returns {JSX.Element} Elemento JSX que representa la página de error.
 */
import Background from "@/components/Background";

export default function ErrorPage() {
  return (
    <main>
      <Background />
      {/* Sección principal */}
      <section className="flex flex-col justify-center min-h-screen bg-secondary lg:bg-transparent">
        {/* Contenedor de texto centralizado */}
        <div className="text-center">
          {/* Título del error */}
          <span className="font-bold text-primary text-8xl">
            Error 404
          </span>
        </div>
        {/* Espaciado superior para el mensaje */}
        <div className="text-center mt-4">
          {/* Mensaje de página no encontrada */}
          <span className="font-bold text-primary text-4xl">
            Página no encontrada
          </span>
        </div>
      </section>
    </main>
  );
}
