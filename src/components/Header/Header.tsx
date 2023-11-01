import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="main-header">
      <img
        src="/images/logo.webp"
        alt="Logo of Better call Lau"
        width="230"
        height="90"
        className="main-header__logo"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
