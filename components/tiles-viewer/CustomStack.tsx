import React, { FC, ReactNode } from 'react';
import { Text, SimpleGrid, Box } from '@mantine/core';

interface CustomStackProps {
  title?: string;
  children?: ReactNode;
}

const CustomStack: FC<CustomStackProps> = ({ title, children }) => {
  return (
    <Box>
      <Text style={{ marginBottom: '10px', color: '#333', fontSize: '24px' }}>
        {title}
      </Text>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }}>
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default CustomStack;