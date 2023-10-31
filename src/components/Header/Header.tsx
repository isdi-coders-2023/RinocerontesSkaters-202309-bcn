import React from "react";
import HeaderStyled from "./HeaderStyled";
import NavigationStyled from "../Navigation/NavigationStyled";

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
      <NavigationStyled className="navigation" />
    </HeaderStyled>
  );
};

export default Header;
