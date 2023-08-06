import { ContactPage, Info, RoomService } from "@mui/icons-material";
import React from "react";
import { Box } from "theme-ui";
import HeaderButton from "./HeaderButton";

export interface HeaderButtonsProps {}

export default function HeaderButtons(props: HeaderButtonsProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, pr: 100 }}>
      <HeaderButton href={"/#about"} icon={<Info />}>
        About Me
      </HeaderButton>
      <HeaderButton href={"/#services"} icon={<RoomService />}>
        My Services
      </HeaderButton>
      <HeaderButton href={"/#contact"} icon={<ContactPage />}>
        Get in touch
      </HeaderButton>
    </Box>
  );
}
