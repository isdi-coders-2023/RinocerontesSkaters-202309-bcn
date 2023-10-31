import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnTap: () => void;
}

const Button = ({
  actionOnTap: actionOnTap,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="button" onTouchEnd={actionOnTap}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
