"use client"
import React, { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Group, Text, Box, NavLink } from '@mantine/core';
import {LogoutOutlined } from "@ant-design/icons"
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { signOut } from 'next-auth/react';

type Route = {
  title: string;
  url: string;
  icon: React.ReactNode;
}

type NavMenuProps = {
  children?: React.ReactNode;
  routes: Route[];
  headerBg?: string;
  headerTextColor?: string;
  burgerColor?: string;
  navbarBg?: string;
  navbarTextColor?: string;
  logoutButton?: string;
  logoutTextColor?: string;
}

export const NavMenu = ({
  children,
  routes,
  headerBg,
  headerTextColor,
  burgerColor,
  navbarBg,
  navbarTextColor,
  logoutButton,
  logoutTextColor
}: NavMenuProps) => {

  const [opened, { toggle }] = useDisclosure();
  let filter: Route[] | undefined;
  let tl: string | undefined;

  function namePath(): string {
    const path = usePathname();
    filter = routes.filter(x => path.includes(x.url));
    filter.map((t) => { tl = t.title });
    return tl;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened},
      }}
      padding="md"
    >
      <AppShell.Header bg={headerBg} c={headerTextColor} withBorder={false}>
        <Group h="100%" px="md" gap={'lg'}>
          <Burger color={burgerColor} opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={500} size="lg">
            {
              namePath()
            }
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg={navbarBg} c={navbarTextColor}>
        <Box py={5}>
          {routes.map((item, index) => (
            <NavLink
              py={10}
              my={15}
              component={Link}
              key={index}
              label={item.title}
              href={item.url}
              leftSection={item.icon}
              variant='subtles'
              onClick={toggle}
            />
          ))}
          <Button onClick={async () => await signOut()} leftSection={<LogoutOutlined />} py={10} my={15} fullWidth={true} variant='filled' color={logoutButton} c={logoutTextColor}>Cerrar Sesión</Button>
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}