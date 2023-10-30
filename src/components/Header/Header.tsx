import React from "react";

const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <img
        src="./public/images/logo.webp"
        alt="Logo of Better call Lau"
        width={390}
        height={149}
      />
    </header>
  );
};

export default Header;
