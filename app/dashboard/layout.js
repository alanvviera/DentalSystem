import AuthProvider from "@/components/authprovider/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import HamburgerMenu from "@/components/dashboard/HamburgerMenu";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions)
    return (
    <AuthProvider>
        <section className="flex">
            <DashboardSidebar session={session}/>
            <section className="w-full h-screen overflow-y-auto">
                <HamburgerMenu session={session}/>
                {children}
            </section>
        </section>
    </AuthProvider>
    )
  }