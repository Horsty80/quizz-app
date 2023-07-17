import { PropsWithChildren } from "react";

export type ButtonProps = {
  text: string | null;
  onClick: () => void;
};

const Button = ({
  text,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return <button onClick={onClick}>{text ? text : children}</button>
};

export default Button;
