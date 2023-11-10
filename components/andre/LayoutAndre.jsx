"use client"
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Group, NavLink } from '@mantine/core';
import { UserOutlined, HomeOutlined, TagsOutlined, FileTextOutlined, SettingOutlined, LogoutOutlined, SearchOutlined } from "@ant-design/icons"
import { usePathname } from "next/navigation";

export function CollapseDesktop({children, routes}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(true);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isActive = (param) => usePathname() === param

  //Cambiar las rutas segun se ocupen
  

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <UserOutlined />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
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
            <button    
                className={`flex items-center px-4 py-2 mt-1 w-full text-gray-600 transition-colors
                duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 
                dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                <LogoutOutlined/>
                <span className="mx-4 font-medium">Cerrar Sesión</span>
            </button>
          </nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}