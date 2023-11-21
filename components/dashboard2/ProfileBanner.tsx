import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Box, ActionIcon, Group, Text, Flex } from '@mantine/core';

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
    <Box bg={bg} c={textColor} px="xl" py="lg">
      {showSettingsButton && (
        <Box ta="right">
          <ActionIcon variant="transparent" component="a" href={settingsLink} c="white">
            <SettingOutlined style={{ fontSize: '25px' }} />
          </ActionIcon>
        </Box>
      )}
      <Flex direction="row" align="center">
        {showAvatar && <Avatar src={avatarImageUrl || undefined} size="16vh" variant="filled" />}
        <Box w="75%" ml="lg">
          <Text size="30px" fw={700}>
            {title}
          </Text>
          <Text size="xl" fw={500}>
            {description}
          </Text>
        </Box>
      </Flex>
      <Box w="100%" mt={15}>
          {children}
      </Box>
    </Box>
  );

export default ProfileBanner;