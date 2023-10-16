//import { signOut} from "next-auth/react"
"use client";
import {
  MenuOutlined,
  HomeOutlined,
  TagsOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
  SearchOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * DashboardSidebar component for the dashboard sidebar.
 * @param {Object} props - Component properties.
 * @param {Object} props.session - User session data.
 * @returns {JSX.Element} JSX element representing the dashboard navigation menu.
 */
const HamburgerMenu = ({ session }) => {
  const isActive = (param) => usePathname() === param
  const {
    user: { name, image },
  } = session
  const [open, setOpen] = useState(false)

  const routes = [
    {
      title: "Inicio",
      url: "/dashboard/home",
      icon: <HomeOutlined />,
    },
    {
      title: "Citas",
      url: "/dashboard/appointments",
      icon: <TagsOutlined />,
    },
    {
      title: "Documentos",
      url: "/dashboard/documents",
      icon: <FileTextOutlined />,
    },
    {
      title: "Configuración",
      url: "/dashboard/settings",
      icon: <SettingOutlined />,
    },
  ];
  const currentPage = routes.find((route) => route.url === usePathname());

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className={`lg:hidden w-full sticky top-0 flex flex-col px-4 py-3
    bg-white border-b dark:bg-gray-900 dark:border-gray-700`}>
      <button
        onClick={handleOpen}
        className="flex px-2 gap-4 justify-start items-center text-2xl text-black dark:text-gray-300"
      >
        {!open? <MenuOutlined /> : <CloseOutlined />}
        <h1>{currentPage ? currentPage.title : ""}</h1>
      </button>
      {open ? (
        <div className="flex flex-col justify-between flex-1 mt-1">
          <div className="relative my-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchOutlined className="w-5 h-5 text-gray-400" fill="none" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border 
                    rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
                    dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Buscar"
            />
          </div>
          <nav>
            {routes.map((route, key) => (
              <a
                href={route.url}
                key={key}
                className={
                  !isActive(route.url)
                    ? `flex items-center px-4 py-2 mt-1 text-gray-600 transition-colors
                                    duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 
                                    dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`
                    : `flex items-center px-4 py-2 mt-1 bg-gray-100 rounded-md
                                    dark:bg-gray-800 dark:text-gray-200 text-gray-700`
                }
              >
                {route.icon}
                <span className="mx-4 font-medium">{route.title}</span>
              </a>
            ))}
          </nav>
          <hr className="my-3" />
          <section className="flex justify-center">
            <a href="#" className="flex items-center px-4 -mx-2">
              <img
                className="object-cover mx-2 rounded-full h-10 w-10"
                src={image}
                alt="avatar"
              />
            </a>
            <button
              onClick={() => signOut()}
              className={`flex items-center px-4 py-2 text-2xl text-gray-600 transition-colors
                            duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 
                            dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            >
              <LogoutOutlined />
            </button>
          </section>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default HamburgerMenu;
