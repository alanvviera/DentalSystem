/**
 * Error 404 Page.
 * @returns {JSX.Element} JSX Element that represents Error 404 page.
 */
import Background from "../components/Background";

export default function NotFoundPage() {
  return (
    <main>
      <Background />
      {/* Container */}
      <section className="flex flex-col justify-center min-h-screen bg-secondary lg:bg-transparent">
        {/* Header */}
        <header className="text-center">
          <span className="font-bold text-primary text-8xl">
            <h1>Error 404</h1>
          </span>
        </header>
        {/* Text content section */}
        <section className="text-center mt-4">
          {/* Error 404 Message */}
          <span className="font-bold text-black text-4xl">
            <h1>Página no encontrada</h1>
          </span>
        </section>
      </section>
    </main>
  );
}
