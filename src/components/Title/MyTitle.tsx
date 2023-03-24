import { ReactNode } from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import { Title } from "./styles";

interface TitleProps {
  children: ReactNode;
}
export const MyTitle = ({ children }: TitleProps) => {
  return <Title>{children}</Title>;
};

interface TypingTextProps {
  subtitle: string;
}
export const TypingText = ({ subtitle }: TypingTextProps) => (
  <motion.p variants={textContainer}>
    {Array.from(subtitle).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
