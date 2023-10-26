"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session} = useSession();

  return (
    <section>
      {session ? (
        <section>
          <h1>{session.user.name}</h1>
          <button onClick={() => signOut()}>Cerrar sesión</button>
        </section>
      ) : (
        <p>Esperando inicio de sesión</p>
      )}
    </section>
  );
}
