import { FaEye, FaLink } from "react-icons/fa";
import { ProjetosStyle } from "./styled";
import Caravan from "../../assets/images/caravan.png";
import Dogs from "../../assets/images/dogs.png";
import Dindin from "../../assets/images/dindin.png";
import Contador from "../../assets/images/contador.png";
import Compras from "../../assets/images/lista-compras.png";
import Media from "../../assets/images/media.png";

const SectionProjetos = () => {
  return (
    <ProjetosStyle>
      <div id="portfolios">
        <div className="container">
          <h2 className="section-title">Projetos Pessoais</h2>
          <div className="row">
            <div className="col-md-12"></div>
            <div id="portfolio" className="row ">
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Caravan} alt="Interface WebSite Caravan" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="https://leoodaviid.github.io/Caravan/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/Caravan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Dogs} alt="Interface WebSite Dogs" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="https://dog-leoodaviid.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/dog"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Dindin} alt="Interface WebSite DinDin" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href=" https://leoodaviid.github.io/DinDin/"
                          target="_blank"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/DinDin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Contador} alt="Interface Contador" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="https://leoodaviid.github.io/Mini-Projeto-Contador/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/Mini-Projeto-Contador"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Compras} alt="Interface Compras" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="https://leoodaviid.github.io/Lista-Compras/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/Lista-Compras"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src={Media} alt="Interface Média" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="https://leoodaviid.github.io/calculo-simples-aritimetica/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye">
                            <FaEye />
                          </i>
                        </a>
                        <a
                          className="link"
                          href="https://github.com/Leoodaviid/calculo-simples-aritimetica"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-link">
                            <FaLink />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjetosStyle>
  );
};

export default SectionProjetos;
