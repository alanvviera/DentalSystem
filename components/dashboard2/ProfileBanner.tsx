import React, { ReactNode } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Box, ActionIcon, Group, Text } from '@mantine/core';

type ProfileBannerProps = {
  children?: React.ReactNode;
  showAvatar?: boolean;
  avatarImageUrl?: string | null;
  title?: string;
  description?: string;
  showSettingsButton: boolean;
  settingsLink?: string;
  bg?: string;
  textColor?: string;
}

const ProfileBanner = ({
  children,
  showAvatar,
  avatarImageUrl,
  title,
  description,
  showSettingsButton,
  settingsLink = '#',
  bg = 'blue.7',
  textColor = 'white',
}: ProfileBannerProps) => (
    <Box bg={bg} c={textColor}>
      {showSettingsButton && (
        <Box ta="right">
          <ActionIcon variant="transparent" component="a" href={settingsLink} c="white" mr="20px" mt="15px">
            <SettingOutlined style={{ fontSize: '25px' }} />
          </ActionIcon>
        </Box>
      )}
      <Group w="100%" px="30px" pt="20px" pb="40px">
        {showAvatar && <Avatar src={avatarImageUrl || undefined} size="20vh" variant="filled" />}
        <Box w="80%">
          <Text size="30px" fw={700} truncate="end">
            {title}
          </Text>
          <Text size="xl" fw={500} truncate="end">
            {description}
          </Text>
        </Box>
        <Box w="100%" mt={15}>
          {children}
        </Box>
      </Group>
    </Box>
  );

export default ProfileBanner;