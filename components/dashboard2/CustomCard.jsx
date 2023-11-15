import { PlusOutlined } from "@ant-design/icons";
import { Card, Group, Text, Button, ActionIcon, Flex } from "@mantine/core";

const CustomCard = ({
  title,
  children,
  showAddButton,
  addButtonLink = "#",
  showMoreButton,
  moreButtonPosition = "bottom",
  moreButtonLink = "#",
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex align="center" justify="space-between">
        <Text truncate="end" c="blue" size="xl" fw={500}>
          {title}
        </Text>
        <Group gap="xs">
          {showAddButton && (
            <ActionIcon
              component="a"
              href={addButtonLink}
              variant="transparent"
            >
              <PlusOutlined style={{ fontSize: "20px" }} />
            </ActionIcon>
          )}
          {showMoreButton && moreButtonPosition === "top" && (
            <Button
              component="a"
              href={moreButtonLink}
              variant="light"
              color="blue"
              radius="md"
            >
              Ver más
            </Button>
          )}
        </Group>
      </Flex>
      {children}
      {showMoreButton && moreButtonPosition === "bottom" && (
        <Button
          component="a"
          href={moreButtonLink}
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Ver más
        </Button>
      )}
    </Card>
  );
};

export default CustomCard;
