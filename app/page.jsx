"use client";
import { CenterLoading } from "@/components/CenterLoading";
import MenuDashboard from "@/components/dashboard/MenuDashboard";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session,status } = useSession();

  return (
   <>
    <MenuDashboard 
    session={session}
    />
   </>
  );
}
