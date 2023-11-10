import AuthProvider from '@/components/authprovider/AuthProvider'; // Import AuthProvider component
import '@mantine/core/styles.css'; //Import Mantine Styles
import './globals.css'; // Import global CSS styles
import { MantineProvider, createTheme } from '@mantine/core'; //Import MantineProvider
import { Montserrat } from 'next/font/google'; // Import Montserrat font
import { ColorSchemeScript } from '@mantine/core'; //For server-side rendering.


// Initialize Montserrat font with specific subsets
const montserrat = Montserrat({ subsets: ['latin'] });

// Mantine theme
const theme = createTheme({
  /** Put your mantine theme override here */
})

/**
 * Object containing metadata for the application.
 *
 * @type {object}
 * @property {string} title - The title of the application.
 * @property {string} description - A description of the application.
 */
export const metadata = {
  title: 'Sistema Dental',
  description:
    'Sistema Dental es una plataforma tecnológica avanzada diseñada específicamente para satisfacer las necesidades de las clínicas dentales modernas. Esta solución integral está destinada a mejorar la eficiencia operativa, agilizar la atención al paciente y permitir una administración efectiva de todos los aspectos relacionados con la práctica odontológica.',
};

/**
 * RootLayout component representing the root layout of the application.
 *
 * @component
 * @param {object} props - The props for the RootLayout component.
 * @param {ReactNode} props.children - The child components to be rendered inside the layout.
 * @returns {JSX.Element} JSX element for the RootLayout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
      <ColorSchemeScript />
      </head>
      <body className={montserrat.className}>
      <MantineProvider theme={theme}>
        <AuthProvider>
          {children}
        </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
