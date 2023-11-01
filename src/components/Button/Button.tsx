import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnTap: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({
  actionOnTap,
  disabled,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className="button"
      onTouchEnd={actionOnTap}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
