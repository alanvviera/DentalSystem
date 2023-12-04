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
import { validateEmail, validatePassword } from "../../components/mantine-form/valuesValidate";
import CustomInputMantine, {
  typeInputForm,
} from "../../components/mantine-form/customMantineInput";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const ResetPage = () => {
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
              Reestablecer contraseña
            </Title>
          </Stack>
          <MantineForm
            initialValuesForKeys={{
              password: "",
              repeatPassword:""
            }}
            validateForKeys={{
              password: validatePassword,
              repeatPassword: validatePassword
            }}
            listCustomInputMantine={[
              new CustomInputMantine(
                "Nueva contraseña",
                "Nueva contraseña",
                "password",
                typeInputForm.PASSWORD
              ),
              new CustomInputMantine(
                "Confirma tu nueva contraseña",
                "Nueva contraseña",
                "repeatPassword",
                typeInputForm.PASSWORD
              ),
            ]}
            onSubmit={async (form: any) => {
              setError(null);
              open();
              const {
                values: { password },
              } = form;
              console.log(password);
              router.push("/login");
              close();
            }}
            labelSubmit="Enviar"
          />
        </Card>
      </Flex>
    </main>
  );
};

export default ResetPage;
