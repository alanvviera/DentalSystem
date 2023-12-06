"use client";
import React from "react";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  Text,
  Box,
  NavLink,
  rem,
  Divider,
  Stack,
  Avatar,
} from "@mantine/core";
import { LogoutOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { notifications } from "@mantine/notifications";

type Route = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

type NavMenuProps = {
  children?: React.ReactNode;
  routes: Route[];
  headerBg?: string;
  headerTextColor?: string;
  burgerColor?: string;
  navbarBg?: string;
  navbarTextColor?: string;
  user: { name: string; email: string };
};

export const NavMenu = ({
  children,
  routes,
  headerBg,
  headerTextColor,
  burgerColor,
  navbarBg,
  navbarTextColor,
  user,
}: NavMenuProps) => {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [opened, { toggle, close }] = useDisclosure();
  const path = usePathname();
  let filter: Route[] | undefined;
  let tl: string | undefined;

  function namePath(): string {
    filter = routes.filter((x) => path.includes(x.url));
    filter.map((t) => {
      tl = t.title;
    });
    return tl;
  }

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      layout="alt"
      padding="md"
    >
      <AppShell.Header
        hiddenFrom="sm"
        bg={headerBg}
        c={headerTextColor}
        withBorder={false}
      >
        <Group h="100%" px="md" gap={"lg"}>
          <Burger
            color={burgerColor}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Text fw={500} size="lg">
            {namePath()}
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        style={{ overflowY: "auto" }}
        p="md"
        bg={navbarBg}
        c={navbarTextColor}
      >
        <Stack h="100%" justify="space-between">
          <Box>
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Text fw={500} size="xl">
                Sistema Dental
              </Text>
            </Group>
            <Divider my={10} />
            {routes.map((item, index) => (
              <NavLink
                py={10}
                my={15}
                component={Link}
                key={index}
                label={item.title}
                href={item.url}
                leftSection={item.icon}
                variant="subtles"
                onClick={close}
                active={path === item.url}
              />
            ))}
          </Box>
          <Box>
            <Divider mb={10} />
            <NavLink
              label={user.name}
              description={user.email}
              leftSection={<Avatar size="md" variant="filled" p={0}></Avatar>}
            >
              <NavLink
                onClick={async () => {
                  signOut();
                  notifications.show({
                    title: user.email,
                    message: "ha cerrado sesión.",
                  });
                }}
                rightSection={<LogoutOutlined />}
                label="Cerrar sesión"
              />
            </NavLink>
          </Box>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main
        pt={{
          base: `calc(${rem(60)} + var(--mantine-spacing-md))`,
          sm: "20px",
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
