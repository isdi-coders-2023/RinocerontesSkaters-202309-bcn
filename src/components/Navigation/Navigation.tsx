import { NavLink, useLocation } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <ul className="container-list">
        <li className="container-list__icon">
          <NavLink
            className={`icon ${
              pathname === "/home" ? "container-list__active" : ""
            }`}
            to={"/home"}
          >
            <img
              src="/images/vector-home.svg"
              alt="Home icon"
              width="48"
              height="48"
            ></img>
          </NavLink>
        </li>
        <li className="container-list__icon">
          <NavLink
            className={`icon ${
              pathname === "" ? "container-list__active" : ""
            }`}
            to={""}
          >
            <img
              src="/images/vector-add.svg"
              alt="Create icon"
              width="48"
              height="48"
            ></img>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
