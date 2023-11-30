import AuthProvider from '../../components/authprovider/AuthProvider';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core';
import { Montserrat } from 'next/font/google';
import { NavMenu } from '../../components/nav-menu/NavMenu';
import { HomeOutlined, TagsOutlined, FileTextOutlined, SettingOutlined } from "@ant-design/icons"

// Initialize Montserrat font with specific subsets
const montserrat = Montserrat({ subsets: ['latin'] });

// Mantine theme
const theme = createTheme({
  /** Put your mantine theme override here */
});

/**
 * Object containing metadata for the application.
 *
 * @type {object}
 * @property {string} title - The title of the application.
 * @property {string} description - A description of the application.
 */
export const metadata: object = {
  title: 'Sistema Dental',
  description:
    'Sistema Dental is an advanced technological platform specifically designed to meet the needs of modern dental clinics. This comprehensive solution is intended to improve operational efficiency, streamline patient care, and enable effective management of all aspects related to dental practice.',
};

/**
 * RootLayout component representing the root layout of the application.
 *
 * @component
 * @param {object} props - The props for the RootLayout component.
 * @param {ReactNode} props.children - The child components to be rendered inside the layout.
 * @returns {JSX.Element} JSX element for the RootLayout.
 */

type RootLayoutProps = {
  children: React.ReactNode
};

const RootLayout = ({ children }: RootLayoutProps) => {

  const routes = [
    {
        title: "Inicio",
        url: "/client-menu",
        icon: <HomeOutlined/>
    },
    {
        title: "Perfil",
        url: "/client-menu/profile",
        icon: <SettingOutlined/>
    },
    {
        title: "Citas",
        url: "/client-menu/appointments",
        icon: <TagsOutlined/>
    },
    ,
    {
        title: "Adeudo",
        url: "/client-menu/debt",
        icon: <TagsOutlined/>
    },
   
    {
        title: "Historial clínico",
        url: "/client-menu/medicalHistory",
        icon: <FileTextOutlined/>
    }
];

  return (
    <NavMenu routes={routes} headerBg={'blue.5'}
            headerTextColor={'white'} burgerColor={'dark'} navbarBg={'gray.2'} navbarTextColor={'dark'}
            logoutButton={'blue.4'} logoutTextColor={'dark'}
          >
            {children}
          </NavMenu>
  );
}

export default RootLayout;