import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  actionOnClick: () => void;
}

const Button = ({
  actionOnClick,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {children}
    </button>
  );
};

export default Button;
