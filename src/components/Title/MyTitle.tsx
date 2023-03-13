import { ReactNode } from "react";
import { Title } from "./styles";

interface TitleProps {
  children: ReactNode;
}
export const MyTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};
