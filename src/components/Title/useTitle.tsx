import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import { MyTitle, TypingText } from "./MyTitle";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

export const UseTitle = () => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [accentuation, setAccentuation] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/sobre":
        setSubTitle("Conheça mais sobre mim");
        setTitle("Quem sou");
        setAccentuation("?");
        break;
      case "/habilidades":
        setSubTitle("Minhas habilidades e competências");
        setTitle("Conheça minhas habilidades");
        setAccentuation(".");
        break;
      case "/projetos":
        setSubTitle("Meus projetos e realizações");
        setTitle("Conheça meus projetos realizados");
        setAccentuation(".");
        break;
      case "/contato":
        setSubTitle("Fale comigo");
        setTitle("Entre em contato e tire suas dúvidas");
        setAccentuation(".");
        break;
      default:
        setSubTitle("");
        setTitle("");
    }
  }, [location]);

  return (
    <Container>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
      >
        <TypingText subtitle={subTitle} />
        <MyTitle>
          <motion.div
            variants={fadeIn({
              direction: "right",
              type: "tween",
              delay: 0.2,
              duration: 1,
            })}
          >
            {title}
            <span>{accentuation}</span>
          </motion.div>
        </MyTitle>
      </motion.div>
    </Container>
  );
};
