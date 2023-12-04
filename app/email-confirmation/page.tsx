import { MailOutlined } from "@ant-design/icons";
import {
  Anchor,
  Button,
  Card,
  CardSection,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

const ConfirmationPage = () => {
  return (
    <main style={{ height: "100%" }}>
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
          padding="xl"
          radius="md"
          withBorder
          w={{ base: "100%", md: "40%" }}
          m="auto"
          h={{ base: "100%", md: "auto" }}
        >
          <Stack ta="center" align="center" gap={10}>
            <MailOutlined style={{ color: "#4287ef", fontSize: "8rem" }} />
            <Text fw={500} size="xl">
              Se ha enviado un enlace de confirmación a tu correo electrónico.
            </Text>
            <Button mt={20} fullWidth>Reenviar</Button>
          </Stack>
          <CardSection mt="lg" inheritPadding>
            <Flex justify="center" gap={7}>
              <Text>Volver al</Text>
              <Anchor fw={700} href="/login" underline="never">
                Inicio de sesión
              </Anchor>
            </Flex>
          </CardSection>
        </Card>
      </Flex>
    </main>
  );
};

export default ConfirmationPage;
