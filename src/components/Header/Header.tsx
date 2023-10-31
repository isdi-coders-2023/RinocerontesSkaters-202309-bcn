import React from "react";
import HeaderStyled from "./HeaderStyled";

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
    </HeaderStyled>
  );
};

export default Header;
