import AuthProvider from '../context/AuthProvider'; // Import AuthProvider component
import '@mantine/core/styles.css'; //Import Mantine Styles
import '@mantine/notifications/styles.css'; //Import Notification Styles
import './globals.css'; // Import global CSS styles
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'; //Import MantineProvider
import '@mantine/dates/styles.css'; //Import package Matine dates styles
import { Montserrat } from 'next/font/google'; // Import Montserrat font
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

const montserrat = Montserrat({ subsets: ['latin'] })

const theme = createTheme({
  /** Your theme override here */
});

export const metadata = {
  title: 'Sistema Dental',
  description: 'Sistema Dental es una plataforma tecnológica avanzada diseñada específicamente para satisfacer las necesidades de las clínicas dentales modernas. Esta solución integral está destinada a mejorar la eficiencia operativa, agilizar la atención al paciente y permitir una administración efectiva de todos los aspectos relacionados con la práctica odontológica.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={montserrat.className}>
        <ColorSchemeScript defaultColorScheme='auto' />
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <AuthProvider>
            <Notifications />
              {children}
            </AuthProvider>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
