import AuthProvider from '../../components/authprovider/AuthProvider';
import '@mantine/core/styles.css';
import { NavMenu } from '../../components/nav-menu/NavMenu';
import { HomeOutlined, TagsOutlined,  AccountBookOutlined, BuildOutlined } from "@ant-design/icons"

/**
 * Object containing metadata for the application.
 *
 * @type {object}
 * @property {string} title - The title of the application.
 * @property {string} description - A description of the application.
 */
export const metadata: object = {
  title: 'Empleado',
  description:
    'Menu de navegación para empleado.',
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
        url: "/employee-menu",
        icon: <HomeOutlined/>
    },
    {
        title: "Citas",
        url: "/employee-menu/appointments",
        icon: <TagsOutlined/>
    },
    {
        title: "Clínicas",
        url: "/employee-menu/clinics",
        icon: <BuildOutlined/>
    },
    {
        title: "Perfil",
        url: "/employee-menu/profile",
        icon: <AccountBookOutlined/>
    }
];

  return (
          <NavMenu routes={routes} headerBg={'blue.5'}
            headerTextColor={'white'} burgerColor={'white'} navbarBg={'gray.1'} navbarTextColor={'dark'}
          >
            {children}
          </NavMenu>
  );
}

export default RootLayout;