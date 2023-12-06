"use client";

import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  /** Your theme override here */
});

const Providers = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>{children}</ModalsProvider>
      <Notifications />
    </MantineProvider>
  );
};

export default Providers;
