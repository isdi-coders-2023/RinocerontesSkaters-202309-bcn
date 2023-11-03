import { NavLink, useLocation } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <NavigationStyled>
      <ul className="container-list">
        <li className="container-list__icon">
          <NavLink to={"/home"}>
            <img
              className={`icon ${
                pathname === "/home" ? "container-list__active" : "icon"
              }`}
              src="/images/vector-home.svg"
              alt="Home icon"
              width="48"
              height="48"
            />
          </NavLink>
        </li>
        <li className="container-list__icon">
          <NavLink to={"/home"}>
            <img
              className={`icon ${
                pathname === "/home" ? "container-list__active" : ""
              }`}
              src="/images/vector-add.svg"
              alt="Create icon"
              width="48"
              height="48"
            />
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
