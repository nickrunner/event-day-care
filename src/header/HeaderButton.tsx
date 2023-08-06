import { Box, Button } from "theme-ui";
import React, { ReactElement, useState, PropsWithChildren } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { navigate } from "gatsby"; //import navigate from gatsby

export interface HeaderButtonMenuItem {
  icon: ReactElement;
  text: string;
  onClick: (text: string) => void;
}

export interface HeaderButtonProps {
  icon: ReactElement;
  href?: string;
  onClick?: () => void;
  menuItems?: HeaderButtonMenuItem[];
}
export default function HeaderButton(
  props: PropsWithChildren<HeaderButtonProps>
) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  function isMenu(): boolean {
    return props.menuItems != undefined && props.menuItems.length > 0;
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (isMenu()) {
      setAnchorEl(event.currentTarget);
    } else if (props.onClick) {
      props.onClick();
    } else if (props.href) {
      navigate(props.href);
    }
  }
  function handleClose() {
    if (isMenu()) {
      setAnchorEl(null);
    }
  }

  return (
    <>
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          variant: "buttons.nav",
        }}
        variant="nav"
        onClick={handleClick}
      >
        <Box sx={{ mr: 1 }}>{props.icon}</Box>
        {props.children}
        {isMenu() ? <ArrowDropDown /> : <></>}
      </Button>
    </>
  );
}
