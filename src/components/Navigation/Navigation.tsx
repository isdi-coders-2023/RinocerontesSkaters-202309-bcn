import { NavLink, useLocation } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <NavLink
        className={`icon ${pathname === "/home" ? "icon__active" : ""}`}
        to={"/home"}
      >
        <img
          src="/images/vector-home.svg"
          alt="Home icon"
          width="48"
          height="48"
        ></img>
      </NavLink>

      <NavLink
        className={`icon ${pathname === "" ? "icon__active" : ""}`}
        to={"/home"}
      >
        <img
          src="/images/vector-add.svg"
          alt="Create icon"
          width="48"
          height="48"
        ></img>
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
