import React from "react";
import { HeaderButtonProps } from "./HeaderButton";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import { Box } from "theme-ui";

interface HeaderProps {
  loggedIn: boolean;
  onLogoClick?: () => void;
  onLoginClick?: () => void;
  buttonHandlers?: HeaderButtonProps;
}

export default function HeaderComponent(props: HeaderProps) {
  return (
    <Box
      sx={{
        zIndex: 510,
        position: "fixed",
        display: "flex",
        border: 1,
        height: 80,
        pt: 10,
        bg: "background",
        boxSizing: "border-box",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <HeaderLogo onClick={props.onLogoClick} />
      <HeaderButtons />
    </Box>
  );
}
