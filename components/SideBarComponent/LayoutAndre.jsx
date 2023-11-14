"use client"
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Group, Text, Box, NavLink } from '@mantine/core';
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useState } from 'react';

export function CollapseDesktop({children, routes}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(true);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isActive = (param) => usePathname() === param
  const [active, setActive] = useState(0);
  let filter;
  let tl;

  function NamePath(){
    filter = routes.filter(x => x.url == usePathname())
    //console.log(filter)
    filter.map((t)=>{
      tl = t.title
      //console.log(tl)
    })
  }

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
        <Group h="100%" px="md" gap={'lg'}>
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <UserOutlined mb={5} />
          {NamePath()}
          <Text fw={500} size="lg">
            {tl}
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Box>
          {routes.map((item, index)=>(
            <NavLink
              component={Link}
              key={index}
              active={index === active}
              label={item.title}
              href={item.url}
              leftSection={item.icon}
              onClick={()=>setActive(index)}
            />
          ))}
          <Button leftSection={<LogoutOutlined/>} fullWidth={true} variant="outline" color='dark'>Cerrar Sesión</Button>
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

{/* 
            <button    
                className={`flex items-center px-4 py-2 mt-1 w-full text-gray-600 transition-colors
                duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 
                dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}>
                <LogoutOutlined/>
                <span className="mx-4 font-medium">Cerrar Sesión</span>
            </button>
*/}