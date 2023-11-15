import { SettingOutlined } from "@ant-design/icons";
import {
  Avatar,
  Box,
  ActionIcon,
  Group,
  Text,
} from "@mantine/core";
import React from "react";

const ProfileBanner = ({children, showAvatar, avatarImageUrl, title, description, showSettingsButton, settingsLink="#", bg = "blue.7", textColor = "white"}) => {
  return (
    <Box bg={bg} c={textColor}>
      {showSettingsButton && <Box ta="right">
        <ActionIcon variant="transparent" component="a" href={settingsLink} c="white" mr="20px" mt="15px">
          <SettingOutlined style={{ fontSize: "25px" }}/>
        </ActionIcon>
      </Box>}
      <Group w="100%" px="30px" pt="20px" pb="40px">
      {showAvatar && <Avatar src={avatarImageUrl} size="20vh" variant="filled" />}
      <Box w="80%">
        <Text size="30px" fw={700} truncate="end">
          {title}
        </Text>
        <Text size="xl" fw={500} truncate="end">
          {description}
        </Text>
      </Box>
      <Box w="100%" mt={15}>{children}</Box>
    </Group>
    </Box>
    
  );
};

export default ProfileBanner;
