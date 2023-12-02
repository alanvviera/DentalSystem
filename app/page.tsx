"use client"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const session = getCookie("userType");
    if(session) {
      router.push("/menu");
    }
    else{
      router.push("/login");
    }  
  }, [])
  return (
    <p>
      Esperando inicio de sesión
    </p>
  );
}
