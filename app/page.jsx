"use client";
import { CenterLoading } from "@/components/CenterLoading";
import MenuDashboard from "@/components/dashboard/MenuDashboard";
import { signOut, useSession } from "next-auth/react";

/**
 * Home component representing the main page of the application.
 *
 * @component
 * @returns {JSX.Element} JSX element for the Home page.
 */

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
