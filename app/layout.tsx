import AuthProvider from "../context/AuthProvider"; // Import AuthProvider component
import "@mantine/core/styles.css"; //Import Mantine Styles
import "./globals.css";
import "@mantine/notifications/styles.css"; //Import Notification Styles
import { ColorSchemeScript } from "@mantine/core"; //Import MantineProvider
import "@mantine/dates/styles.css"; //Import package Matine dates styles
import { Montserrat } from "next/font/google"; // Import Montserrat font
import Providers from "../context/Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Clinic Master",
  description:
    "Plataforma tecnológica avanzada diseñada específicamente para satisfacer las necesidades de las clínicas modernas. Esta solución integral está destinada a mejorar la eficiencia operativa, agilizar la atención al paciente y permitir una administración efectiva de todos los aspectos relacionados con la práctica odontológica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={montserrat.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
