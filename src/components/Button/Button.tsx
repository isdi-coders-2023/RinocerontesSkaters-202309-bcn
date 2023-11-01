import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnTap: () => void;
  disabled: boolean;
  text: string;
}

const Button = ({
  actionOnTap: actionOnTap,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="button" onTouchEnd={actionOnTap} disabled>
      {children}
    </ButtonStyled>
  );
};

export default Button;
