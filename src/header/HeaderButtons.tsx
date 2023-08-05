import {
  DeviceHubTwoTone,
  Home,
  Person,
  ManageAccounts,
  Support,
  Engineering,
  Search,
  Code,
  QrCode,
  ListAlt,
  Info,
  RoomService,
  ContactPage,
} from "@mui/icons-material";
import { Box } from "theme-ui";
import HeaderButton from "./HeaderButton";
import React from "react";

export interface HeaderButtonsProps {}

export default function HeaderButtons(props: HeaderButtonsProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, pr: 100 }}>
      <HeaderButton icon={<Info />}>About Me</HeaderButton>
      <HeaderButton icon={<RoomService />}>My Services</HeaderButton>
      <HeaderButton icon={<Info />}>Locations</HeaderButton>
      <HeaderButton icon={<ContactPage />}>Get in touch</HeaderButton>
    </Box>
  );
}
