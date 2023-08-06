import { PropsWithChildren } from "react";

export type CardProps = {
  label: string;
};

function Card({ label, children }: PropsWithChildren<CardProps>) {
  return (
    <>
      {label && <span>{label}</span>}
      <div>{children}</div>
    </>
  );
}

export default Card;
