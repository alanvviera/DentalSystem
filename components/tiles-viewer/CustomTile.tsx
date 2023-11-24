import React, { ReactNode } from 'react';
import { Card, Group, Text, Box } from '@mantine/core';

type CustomTileProps = {
  title?: string;
  baseLink?: string;
  bottomRightText1?: string;
  bottomRightText2?: string;
  topRightText?: string;
  fontSize?: string;
  topRightFontSize?: string; // Nuevo prop para el tamaño de la fuente
  children?: ReactNode;
}

const CustomTile = ({
  title,
  baseLink,
  bottomRightText1,
  bottomRightText2,
  topRightText,
  fontSize = '14px',
  topRightFontSize = '14px', // Valor por defecto para el tamaño de la fuente
  children,
}:CustomTileProps) => (
    <Card
      component="a"
      href={baseLink}
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
            size=  {topRightFontSize}
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
                fontSize: fontSize,
              }}
            >
              {bottomRightText1}
            </Text>
          )}
          {bottomRightText2 && (
            <Text
              style={{
                fontSize: fontSize,
              }}
            >
              {bottomRightText2}
            </Text>
          )}
        </Group>
      )}

    </Card>
  );

export default CustomTile;