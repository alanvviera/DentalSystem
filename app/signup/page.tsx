"use client";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Anchor,
  Card,
  Flex,
  Group,
  LoadingOverlay,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import EmployeeForm from "../../components/signup-form/EmployeeForm";
import DoctorForm from "../../components/signup-form/DoctorForm";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/menu");
    }
  }, [session]);
  const [visible, { open, close }] = useDisclosure(false);
  const [userForm, setUserForm] = useState("Empleado");
  return (
    <main style={{ height: "100%" }}>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Flex bg="gray.1" pos="relative" h="100%" direction="column" justify="center">
        <Card
          style={{ overflowY: "auto" }}
          shadow="sm"
          my={{base: "0", md:"30px"}}
          padding="lg"
          radius="md"
          withBorder
          w={{ base: "100%", md: "40%" }}
          m="auto"
          h={{ base: "100%", md: "auto" }}
          py="xl"
        >
          <Stack align="center" gap={7}>
            <Title order={1} c="blue">
              Regístrate
            </Title>
            <Group gap={7} justify="center">
              <Text size="md">Como </Text>
              <Select
                size="md"
                //variant="unstyled"
                maw="150px"
                data={["Empleado", "Doctor"]}
                allowDeselect={false}
                value={userForm}
                onChange={setUserForm}
              />
            </Group>
          </Stack>
          {userForm === "Empleado" ? <EmployeeForm spinner={{open, close}} /> : <DoctorForm spinner={{open, close}} />}
          <Card.Section mt="lg" inheritPadding>
            <Flex justify="center" gap={7}>
              <Text>Regresar al</Text>
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

export default SignUpPage;
