import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="container-list">
        <li className="container-list__icon">
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img
              className="icon"
              src="/images/vector-home.svg"
              alt="Home icon"
              width="48"
              height="48"
            />
          </NavLink>
        </li>
        <li className="container-list__icon">
          <NavLink
            to="/create"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img
              className="icon"
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
