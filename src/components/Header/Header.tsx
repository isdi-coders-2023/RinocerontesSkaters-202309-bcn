import React from "react";
import HeaderStyled from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="main-header">
      <img
        src="./public/images/logo.webp"
        alt="Logo of Better call Lau"
        width={230}
        height={90}
        className="logo"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
