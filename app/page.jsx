"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "loading") {
    return (
      <section>
        <p>Cargando...</p>
      </section>
    );
  }

  return (
    <section>
      {session ? (
        <section>
          <h1>{session.user.name}</h1>
          <button onClick={() => signOut()}>Cerrar sesión</button>
        </section>
      ) : (
        <p>Cargando sesión...</p>
      )}
    </section>
  );
}
