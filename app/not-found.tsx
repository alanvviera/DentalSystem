/**
 * Error 404 Page.
 * @returns {JSX.Element} JSX Element that represents Error 404 page.
 */

import { Flex, Stack, Text } from "@mantine/core";

export default function NotFoundPage() {
  return (
    <main style={{ height: "100%" }}>
      {/* Container */}
      <Flex h="100%" justify="center" align="center" bg="gray.0">
        <Stack align="center" gap={4}>
          {/* Header */}
          <Text fw={700} size="80px" c="blue">Error 404</Text>
          {/* Text content section */}
          <Text fw={500} size="30px">Página no encontrada</Text>
        </Stack>
      </Flex>
    </main>
  );
}
