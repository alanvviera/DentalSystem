import React from 'react';
import { EditFilled, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Box, ActionIcon, Group, Text, Flex, Divider, Button } from '@mantine/core';

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
  <Box bg={bg} c={textColor} px="xl" py="lg" style={{ borderRadius: "8px" }}>
    <Flex gap={15} direction={{ base: "column", md: "row" }} align="center">
      {showAvatar && <Avatar src={avatarImageUrl || undefined} size="110px" variant="filled" />}
      <Box w="100%" ta={{base: "center", md: "left"}}>
        <Text size="30px" fw={700}>
          {title}
        </Text>
        <Text size="lg" fw={500}>
          {description}
        </Text>
      </Box>
      {showSettingsButton && (
        <>
          <ActionIcon variant="subtle" component="a" href={settingsLink} c="white" display={{base: "none", md:"block"}}>
            <EditOutlined style={{ fontSize: '25px' }} />
          </ActionIcon>
          <Button variant='subtle' c="white" leftSection={<EditOutlined style={{ fontSize: '25px'}}/>} display={{base: "block", md:"none"}}>Editar</Button>
        </>
      )}
    </Flex>
    <Box w="100%">
      {children}
    </Box>
  </Box>
);

export default ProfileBanner;