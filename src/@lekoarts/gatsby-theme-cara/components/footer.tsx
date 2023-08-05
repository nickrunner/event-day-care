import React from "react";
import { Box, useColorMode } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;

  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
    </Box>
  );
};

export default Footer;