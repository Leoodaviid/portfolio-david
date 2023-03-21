import { Section } from "./styles";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";
import { projectsData } from "../../data/projectsData";
import Projeto from "../../components/Projeto/Projeto";

const Projects = () => {
  return (
    <>
      <Head
        title="Projetos - Desenvolvedor Web Front-end"
        description="Veja os projetos de Leonardo David, um desenvolvedor web com diversas habilidades em front-end. Conheça seus projetos mais recentes e saiba mais sobre as tecnologias utilizadas."
      />
      <UseTitle />
      <Section>
        <div className="portfolio">
          {projectsData.map(({ id, img, alt, preview, repository }) => (
            <Projeto
              key={id}
              img={img}
              alt={alt}
              preview={preview}
              repository={repository}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects;
