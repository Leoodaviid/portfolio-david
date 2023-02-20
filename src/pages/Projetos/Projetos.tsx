import { Section } from "./styles";
import Agenda from "../../assets/images/beleza-agenda.png";
import Caravan from "../../assets/images/caravan.png";
import Dogs from "../../assets/images/dogs.png";
import Dindin from "../../assets/images/dindin.png";
import LaParrilla from "../../assets/images/Parrilla-food-commerce.png";
import Contador from "../../assets/images/contador.png";
import Compras from "../../assets/images/lista-compras.png";
import Media from "../../assets/images/media.png";
import Projeto from "../../components/Projeto/Projeto";

const Projetos = () => {
  return (
    <Section>
      <div id="portfolios">
        <div className="container">
          <h2 className="section-title">Projetos Pessoais</h2>
          <div className="row">
            <div className="col-md-12"></div>
            <div id="portfolio" className="row ">
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
                img={Agenda}
                alt={"Interface WebSite Beleza na agenda."}
                preview={"https://agenda-testes.vercel.app/"}
                repository={"https://github.com/Leoodaviid/beleza-na-agenda"}
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
                img={Contador}
                alt={"Interface contador."}
                preview={"https://leoodaviid.github.io/Mini-Projeto-Contador/"}
                repository={
                  "https://github.com/Leoodaviid/Mini-Projeto-Contador"
                }
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projetos;
