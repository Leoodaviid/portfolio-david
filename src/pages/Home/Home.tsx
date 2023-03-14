import { LinkButton } from "../../components/Button/LinkButton";
import { Section } from "./styles";
import { Head } from "../../components/Head/Head";
import TextMotion from "./TextMotion";

const Home = () => {
  const textOne = "Olá,".split("");
  const textTwo = "sou David,".split("");
  const textThree = "desenvolvedor Web.".split("");

  return (
    <>
      <Head
        title="Desenvolvedor Front-end"
        description="Meu portfólio apresenta projetos de desenvolvimento web criativos e modernos, demonstrando minhas habilidades em front-end. Confira meu trabalho e entre em contato para discutir oportunidades de colaboração."
      />
      <Section>
        <div className="text-zone">
          <h1>
            {textOne.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
            <br />
            {textTwo.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
            <br />
            {textThree.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
          </h1>
          <p className="gray-text">Front End Developer</p>
          <br />
          <div>
            <LinkButton to={`/sobre`} className="btn btn-common">
              Saiba Mais
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
