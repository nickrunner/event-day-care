import React from "react";
import { Box, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

export interface HeaderLogoProps {
  onClick?: () => void;
}

export default function HeaderLogo(props: HeaderLogoProps) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        cursor: "pointer",
        height: { xs: 60, sm: 75 },
        display: "flex",
        gap: 3,
        alignItems: "center",
        ml: 2,
      }}
    >
      <StaticImage
        src="../images/logo.png"
        alt="Event Day Care"
        height={70}
        width={420}
      />
      {/* <Text sx={{ color: "primary" }} variant="bigger">
        Event Daycare
      </Text> */}
    </Box>
  );
}
