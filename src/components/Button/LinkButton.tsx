import { ReactNode } from "react";
import { LinkBtn } from "./styles";

interface ButtonLinkProps {
  className?: string;
  to: string;
  children: ReactNode;
}
export const LinkButton = ({ className, to, children }: ButtonLinkProps) => {
  return (
    <LinkBtn className={className} to={to}>
      {children}
    </LinkBtn>
  );
};
