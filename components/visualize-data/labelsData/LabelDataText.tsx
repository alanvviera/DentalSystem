import React, { ReactNode } from 'react';
import { Card, Text, Badge, Group } from '@mantine/core';
import { DownOutlined } from '@ant-design/icons';

type LabelDataTextProps = {
  type?: string;
  title?: string;
  subIcon?: ReactNode;
  subTileIcon?: ReactNode;
}

const LabelDataText = ({ type = "", title = "", subIcon = <DownOutlined />, subTileIcon }: LabelDataTextProps) => (
  <Card shadow="sm" padding="sm" radius="md" withBorder m={8}>
    <Group justify="space-between">
      <Text fw={500} size='sm'>
        {type}
      </Text>
      <div className='flex'>
        {
          subTileIcon
        }
        <div className='text-[#228BE6] bg-[#E8F3FC] px-[8px] py-[2px] rounded-lg'>
          {subIcon}
        </div>
      </div>
    </Group>
    <Text size="sm" c="dimmed">
      {title}
    </Text>
  </Card>
);

export default LabelDataText;
