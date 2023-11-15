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
          <UserOutlined />
          {NamePath()}
          <Text fw={500} size="lg">
            {tl}
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Box py={5}>
          {routes.map((item, index)=>(
            <NavLink
              py={10}
              my={15}
              component={Link}
              key={index}
              active={index === active}
              label={item.title}
              href={item.url}
              leftSection={item.icon}
              variant='subtles'
              color='blue'
              onClick={()=>setActive(index)}
            />
          ))}
          <Button leftSection={<LogoutOutlined/>} py={10} my={15} fullWidth={true} variant="subtles" color='blue'>Cerrar Sesión</Button>
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

