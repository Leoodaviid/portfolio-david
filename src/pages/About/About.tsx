import { FaRegEnvelope } from "react-icons/fa";
import { Section } from "./styles";
import { LinkButton } from "../../components/Button/LinkButton";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import David from "../../assets/images/me.jpg";
import Image from "../../components/Helper/Image";

const About = () => {
  return (
    <>
      <Head
        title="Sobre - Desenvolvedor Web Criativo e Apaixonado por Tecnologia"
        description="Conheça Leonardo David, um desenvolvedor web apaixonado por tecnologia, com habilidades em front-end. Descubra mais sobre sua jornada profissional, projetos e interesses."
      />
      <Section>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="container"
        >
          <UseTitle />
          <div className="row">
            <div className="col-md-6 col-md-6 col-sm-12 col-xs-12">
              <motion.div
                variants={fadeIn({
                  direction: "right",
                  type: "tween",
                  delay: 0.25,
                  duration: 1,
                })}
                className="img-thumb"
              >
                <Image src={David} alt="Minha Foto" />
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="profile-wrapper">
                <motion.p
                  variants={fadeIn({
                    direction: "left",
                    type: "tween",
                    delay: 0.25,
                    duration: 1,
                  })}
                >
                  Sou um profissional que busca sempre aprimorar meus
                  conhecimentos e contribuir para criar ou evoluir os produtos e
                  processos das empresas que atuo. Atualmente, tenho mais de 4
                  anos de experiência como desenvolvedor front-end. Sempre fui
                  fascinado pelo aspecto dinâmico e criativo deste campo e estou
                  confiante de que minhas habilidades e experiência me tornam
                  uma excelente opção para uma função em qualquer empresa que
                  necessite. Fiz vários cursos de desenvolvimento front-end e
                  tenho trabalhado em projetos pessoais para desenvolver ainda
                  mais minhas habilidades. Estou familiarizado com tecnologias
                  como HTML, CSS, JavaScript, TypeScript e React, e estou
                  ansioso para aplicar meu conhecimento em um ambiente
                  profissional.
                </motion.p>
                <motion.div
                  variants={fadeIn({
                    direction: "up",
                    type: "tween",
                    delay: 0.25,
                    duration: 1,
                  })}
                  className="about-profile"
                >
                  <ul className="admin-profile">
                    <li>
                      <span className="pro-title"> Nome </span>{" "}
                      <span className="pro-detail">Leonardo David</span>
                    </li>
                    <li>
                      <span className="pro-title"> Idade </span>{" "}
                      <span className="pro-detail">26 Anos</span>
                    </li>
                    <li>
                      <span className="pro-title"> País </span>{" "}
                      <span className="pro-detail">Brasil</span>
                    </li>
                    <li>
                      <span className="pro-title"> Cidade </span>{" "}
                      <span className="pro-detail">Fortaleza - CE</span>
                    </li>
                    <li>
                      <span className="pro-title"> E-mail </span>{" "}
                      <span className="pro-detail">david_ax7@hotmail.com</span>
                    </li>
                    <li>
                      <span className="pro-title"> Telefone </span>{" "}
                      <span className="pro-detail">+55 (88) 9.9704-1704</span>
                    </li>
                  </ul>
                </motion.div>
                <LinkButton to={`/contato`} className="btn btn-common">
                  Entre em Contato
                  <i className="icon-speech">
                    <FaRegEnvelope />
                  </i>{" "}
                </LinkButton>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default About;
