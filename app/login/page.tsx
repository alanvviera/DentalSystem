"use client"
import LoginForm from "../../components/login-form/LoginForm";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/menu";
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push(callbackUrl);
    }
  }, [session])
  return <LoginForm />;
};

export default LoginPage;
