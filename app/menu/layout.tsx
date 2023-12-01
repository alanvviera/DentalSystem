import AuthProvider from '../../components/authprovider/AuthProvider';
import '@mantine/core/styles.css';
import { NavMenu } from '../../components/nav-menu/NavMenu';
import { HomeOutlined, TagsOutlined, AccountBookOutlined, BuildOutlined, SettingOutlined, FileTextOutlined } from "@ant-design/icons"
import fakeTypeUser from '../../constants/fakeTypeUser';

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

    const typeUser = fakeTypeUser;
    

    const routesEmployeeMenu = [
        {
            title: "Inicio",
            url: "/menu",
            icon: <HomeOutlined />
        },
        {
            title: "Citas",
            url: "/menu/appointments",
            icon: <TagsOutlined />
        },
        {
            title: "Clínicas",
            url: "/menu/clinics",
            icon: <BuildOutlined />
        },
        {
            title: "Perfil",
            url: "/menu/profile",
            icon: <AccountBookOutlined />
        }
    ];

    const routesClientMenu = [
        {
            title: "Inicio",
            url: "/menu",
            icon: <HomeOutlined />
        },
        {
            title: "Perfil",
            url: "/menu/profile",
            icon: <SettingOutlined />
        },
        {
            title: "Citas",
            url: "/menu/appointments",
            icon: <TagsOutlined />
        },
        ,
        {
            title: "Adeudo",
            url: "/menu/debt",
            icon: <TagsOutlined />
        },

        {
            title: "Historial clínico",
            url: "/menu/medicalHistory",
            icon: <FileTextOutlined />
        }
    ];

    if (typeUser === "EMPLOYEE") {
        return (
            <NavMenu routes={routesEmployeeMenu} headerBg={'blue.5'}
                headerTextColor={'white'} burgerColor={'white'} navbarBg={'gray.1'} navbarTextColor={'dark'}
            >
                {children}
            </NavMenu>
        );
    }
    else {
        return (
            <NavMenu routes={routesClientMenu} headerBg={'blue.5'}
                headerTextColor={'white'} burgerColor={'dark'} navbarBg={'gray.2'} navbarTextColor={'dark'}
                logoutButton={'blue.4'} logoutTextColor={'dark'}
            >
                {children}
            </NavMenu>
        );

    }


}

export default RootLayout;