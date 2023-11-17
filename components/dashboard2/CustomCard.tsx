import React, { ReactNode } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Card, Group, Text, Button, ActionIcon, Flex } from '@mantine/core';

interface CustomCardProps {
  title?: string;
  children?: React.ReactNode;
  showAddButton?: boolean;
  addButtonLink?: string;
  showMoreButton?: boolean;
  moreButtonPosition?: 'top' | 'bottom';
  moreButtonLink?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  children,
  showAddButton,
  addButtonLink = '#',
  showMoreButton,
  moreButtonPosition = 'bottom',
  moreButtonLink = '#',
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex align="center" justify="space-between">
        <Text truncate="end" c="blue" size="xl" fw={500}>
          {title}
        </Text>
        <Group gap="xs">
          {showAddButton && (
            <ActionIcon component="a" href={addButtonLink} variant="transparent">
              <PlusOutlined style={{ fontSize: '20px' }} />
            </ActionIcon>
          )}
          {showMoreButton && moreButtonPosition === 'top' && (
            <Button component="a" href={moreButtonLink} variant="light" color="blue" radius="md">
              Ver más
            </Button>
          )}
        </Group>
      </Flex>
      {children} {/* Esta línea ahora permite contenido adicional */}
      {showMoreButton && moreButtonPosition === 'bottom' && (
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