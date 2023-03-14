import { Section } from "./styles";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";
import Bikcraft from "../../assets/images/bikcraft.png";
import Agenda from "../../assets/images/beleza-agenda.png";
import Caravan from "../../assets/images/caravan.png";
import Dogs from "../../assets/images/dogs.png";
import ApiGitHub from "../../assets/images/api-github.png";
import Dindin from "../../assets/images/dindin.png";
import LaParrilla from "../../assets/images/Parrilla-food-commerce.png";
import Contador from "../../assets/images/contador.png";
import Compras from "../../assets/images/lista-compras.png";
import PingPong from "../../assets/images/ping-pong.png";
import Media from "../../assets/images/media.png";
import Projeto from "../../components/Projeto/Projeto";

const Projetos = () => {
  return (
    <>
      <Head
        title="Projetos - Desenvolvedor Web Front-end"
        description="Veja os projetos de Leonardo David, um desenvolvedor web com diversas habilidades em front-end. Conheça seus projetos mais recentes e saiba mais sobre as tecnologias utilizadas."
      />
      <UseTitle />
      <Section>
        <div className="portfolio">
          <Projeto
            img={LaParrilla}
            alt={"Interface website Laparrilla."}
            preview={"https://github.com/Leoodaviid/laparrilla"}
            repository={"https://github.com/Leoodaviid/laparrilla"}
          />
          <Projeto
            img={Dogs}
            alt={"Interface WebSite Dogs."}
            preview={"https://dog-leoodaviid.vercel.app/"}
            repository={"https://github.com/Leoodaviid/dog"}
          />
          <Projeto
            img={ApiGitHub}
            alt={"Interface WebSite api-gitHub."}
            preview={"https://api-github-beta.vercel.app"}
            repository={"https://github.com/Leoodaviid/api-github"}
          />
          <Projeto
            img={Agenda}
            alt={"Interface WebSite Beleza na agenda."}
            preview={"https://agenda-testes.vercel.app/"}
            repository={"https://github.com/Leoodaviid/beleza-na-agenda"}
          />
          <Projeto
            img={Bikcraft}
            alt={"Interface WebSite Bikcraft."}
            preview={"https://bikcraft-leoodaviid.vercel.app"}
            repository={"https://github.com/Leoodaviid/bikcraft"}
          />
          <Projeto
            img={Caravan}
            alt={"Interface WebSite Caravan"}
            preview={"https://leoodaviid.github.io/Caravan/"}
            repository={"https://github.com/Leoodaviid/Caravan"}
          />
          <Projeto
            img={Dindin}
            alt={"Interface WebSite Dindin"}
            preview={"https://leoodaviid.github.io/DinDin/"}
            repository={"https://github.com/Leoodaviid/DinDin"}
          />
          <Projeto
            img={Compras}
            alt={"Interface lista de compras."}
            preview={"https://leoodaviid.github.io/Lista-Compras/"}
            repository={"https://github.com/Leoodaviid/Lista-Compras"}
          />
          <Projeto
            img={PingPong}
            alt={"Interface jogo ping-pong"}
            preview={"https://leoodaviid.github.io/ping-pong/"}
            repository={"https://github.com/Leoodaviid/ping-pong"}
          />
          <Projeto
            img={Contador}
            alt={"Interface contador."}
            preview={"https://leoodaviid.github.io/Mini-Projeto-Contador/"}
            repository={"https://github.com/Leoodaviid/Mini-Projeto-Contador"}
          />
          <Projeto
            img={Media}
            alt={"Interface media simples aritmetica."}
            preview={
              "https://leoodaviid.github.io/calculo-simples-aritimetica/"
            }
            repository={
              "https://github.com/Leoodaviid/calculo-simples-aritimetica"
            }
          />
        </div>
      </Section>
    </>
  );
};

export default Projetos;
