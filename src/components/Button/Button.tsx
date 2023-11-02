import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({
  onClick: actionOnClick,
  disabled,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className="button"
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
