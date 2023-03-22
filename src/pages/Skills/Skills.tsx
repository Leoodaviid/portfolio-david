import { Container } from "./styles";
import { Ability } from "../../components/Ability/Ability";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";
import { abilityData } from "../../data/abilityData";

const Skills = () => {
  return (
    <>
      <Head
        title="Habilidades - Desenvolvedor Web Front-end"
        description="Descubra as habilidades de Leonardo David, um desenvolvedor web com experiência em front-end e UX design. Saiba mais sobre suas competências técnicas e sua abordagem para o desenvolvimento de projetos web."
      />
      <UseTitle />
      <Container>
        {abilityData.map(
          ({ id, name, station, emission, description, link }) => (
            <Ability
              key={id}
              name={name}
              station={station}
              emission={emission}
              description={description}
              link={link}
            />
          )
        )}
      </Container>
    </>
  );
};

export default Skills;
