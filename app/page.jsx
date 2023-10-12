"use client";
import { CenterLoading } from "@/components/CenterLoading";
import MenuDashboard from "@/components/dashboard/MenuDashboard";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session,status } = useSession();

  return (
   <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
    <MenuDashboard 
    session={session}
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
   </>
  );
}
