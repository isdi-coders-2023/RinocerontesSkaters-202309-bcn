import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const getClassName = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}): string => {
  if (isActive) {
    return "active";
  } else if (isPending) {
    return "pending";
  } else {
    return "";
  }
};

const Navigation = (): JSX.Element => {
  const isActive = true; // Replace with your actual logic
  const isPending = false; // Replace with your actual logic

  const linkClassName = getClassName({ isActive, isPending });

  return (
    <NavigationStyled>
      <ul className="container-list">
        <li className="container-list__icon">
          <NavLink to="/create" className={linkClassName}>
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
          <NavLink to="/create" className={linkClassName}>
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
