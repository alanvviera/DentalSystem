import React from 'react';
import { Card, Group, Text, Box } from '@mantine/core';

const TileComponent = ({
  title,
  onClick,
  bottomRightText1,
  bottomRightText2,
  topRightText,
  children,
}) => {
  return (
    <Card
      onClick={onClick}
      withBorder
      radius="md"
      shadow="md"
      px="lg"
      py="md"
      style={{
        cursor: 'pointer',
      }}
    >
      {topRightText && (
        <Group justify='end'>
          <Text
            c="dimmed"
            size="14px"
          >
            {topRightText}
          </Text>
        </Group>
      )}

      <Text py="12px" size="22px" fw={600}>
        {title}
      </Text>
      <Box c="dimmed" fw={300}>
          {children}
      </Box>

      {(bottomRightText1 || bottomRightText2) && (
        <Group justify="end" mt="lg" fw={500} c="#555">
          {bottomRightText1 && (
            <Text
              style={{
                fontSize: '14px',
              }}
            >
              {bottomRightText1}
            </Text>
          )}
          {bottomRightText2 && (
            <Text
              style={{
                fontSize: '14px',
              }}
            >
              {bottomRightText2}
            </Text>
          )}
        </Group>
      )}

    </Card>
  );
};

export default TileComponent;
