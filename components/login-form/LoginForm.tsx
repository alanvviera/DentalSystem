"use client";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Anchor,
  Card,
  Flex,
  LoadingOverlay,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MantineForm from "../../components/mantine-form/MantineForm";
import {
  validateEmail,
  validatePassword,
} from "../../components/mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../components/mantine-form/customMantineInput";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDisclosure } from "@mantine/hooks";
import { signIn } from "next-auth/react";
import { notifications } from "@mantine/notifications";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [visible, { open, close }] = useDisclosure(false);
  return (
    <main style={{ height: "100%" }}>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Flex
        bg="gray.1"
        pos="relative"
        h="100%"
        direction="column"
        justify="center"
      >
        <Card
          style={{ overflowY: "auto" }}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          w={{ base: "100%", md: "40%" }}
          m="auto"
          h={{ base: "100%", md: "auto" }}
          py="xl"
        >
          <Stack align="center" gap={3}>
            <Title order={1} c="blue">
              Inicia sesión
            </Title>
            <Text>Con una cuenta existente</Text>
          </Stack>
          <MantineForm
            initialValuesForKeys={{
              email: "",
              password: "",
            }}
            validateForKeys={{
              email: validateEmail,
              password: validatePassword,
            }}
            listCustomInputMantine={[
              new CustomInputMantine(
                "Correo electrónico",
                "Introduce tu correo electrónico",
                "email",
                typeInputForm.TEXT
              ),
              new CustomInputMantine(
                "Contraseña",
                "Introduce tu contraseña",
                "password",
                typeInputForm.PASSWORD
              ),
            ]}
            onSubmit={async (form: any) => {
              setError(null);
              const {
                values: { email, password },
              } = form;
              open();
              const response = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password }),
              });
              const login = await response.json();
              if (login.error) {
                setError(login.error);
              } else {
                const responseNextAuth = await signIn("credentials", {
                  email,
                  password,
                  redirect: false,
                });
                if (responseNextAuth.error) {
                  setError(
                    "Error al generar la sesión. Vuelve a intentarlo más tarde."
                  );
                  notifications.show({
                    color: "red",
                    title: "Error",
                    message: "Al intentar iniciar sesión.",
                  });
                }
                else{
                  notifications.show({
                    title: email,
                    message: "ha iniciado sesión.",
                  });
                }
              }
              close();
            }}
            labelSubmit="Iniciar sesión"
          />
          <Flex mt="lg" justify="center" gap={7}>
            <Anchor fw={500} href="/password-forgot" underline="never">
              ¿Olvidaste tu contraseña?
            </Anchor>
          </Flex>
          {error && (
            <Alert
              mt="lg"
              variant="light"
              color="red"
              title="Error"
              icon={<InfoCircleOutlined />}
            >
              {error}
            </Alert>
          )}
          <Card.Section mt="lg" inheritPadding>
            <Flex justify="center" gap={7}>
              <Text>¿No tienes una cuenta?</Text>
              <Anchor fw={700} href="/signup" underline="never">
                Crea una
              </Anchor>
            </Flex>
          </Card.Section>
        </Card>
      </Flex>
    </main>
  );
};
export default LoginForm;
