"use client";
import React, { useState } from "react";
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
import { validateEmail } from "../../components/mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../components/mantine-form/customMantineInput";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const ForgotPage = () => {
  const [error, setError] = useState(null);
  const [visible, { open, close }] = useDisclosure(false);
  const router = useRouter();
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
              ¿Ha olvidado su contraseña?
            </Title>
            <Text>Escriba su dirección de correo electrónico.</Text>
          </Stack>
          <MantineForm
            initialValuesForKeys={{
              email: "",
            }}
            validateForKeys={{
              email: validateEmail,
            }}
            listCustomInputMantine={[
              new CustomInputMantine(
                "Correo electrónico",
                "Introduce tu correo electrónico",
                "email",
                typeInputForm.TEXT
              ),
            ]}
            onSubmit={async (form: any) => {
              setError(null);
              open();
              const {
                values: { email },
              } = form;
              console.log(email);
              router.push("/email-confirmation");
              close();
            }}
            labelSubmit="Continuar"
          />
          <Card.Section mt="lg" inheritPadding>
            <Flex justify="center" gap={7}>
              <Text>Volver al</Text>
              <Anchor fw={700} href="/login" underline="never">
                Inicio de sesión
              </Anchor>
            </Flex>
          </Card.Section>
        </Card>
      </Flex>
    </main>
  );
};

export default ForgotPage;
