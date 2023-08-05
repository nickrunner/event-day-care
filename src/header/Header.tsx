import React from "react";
import HeaderComponent from "./HeaderComponent";

export interface BissellHeaderProps {
  onLoginSuccess?: () => void;
  onLoginFail?: () => void;
}

export default function Header(props: BissellHeaderProps) {
  function handleLogoClick() {}

  return <HeaderComponent loggedIn={true} onLogoClick={handleLogoClick} />;
}
