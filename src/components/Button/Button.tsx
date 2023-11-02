import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  type: "button" | "submit";
  classModifier: string;
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({
  type,
  classModifier,
  onClick: actionOnClick,
  disabled,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className={`button ${classModifier}`}
      type={type}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
