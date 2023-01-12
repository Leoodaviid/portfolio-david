import { FaRegEnvelope } from "react-icons/fa";
import { SectionSobreStyle } from "./style";
import David from "../../assets/images/me.jpg";
import { Link } from "react-router-dom";

const SectionSobre = () => {
  return (
    <SectionSobreStyle>
      <div id="about">
        <div className="container">
          <div className="contact-form-area">
            <div className="row">
              <div className="col-md-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img-thumb">
                  <img className="img-fluid" src={David} alt="Minha Foto" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="profile-wrapper">
                  <h3>Quem sou?</h3>
                  <p>
                    Apaixonado por tecnologia, meu primeiro contato com a
                    programação foi em 2013, quando estava concluindo meu ensino
                    médio. Apesar de ter gostado do universo que a tecnologia
                    proporcionava, só começei a dar o devido foco no final do
                    ano de 2021. <br />
                    Então por questões financeiras, meu pc queimou a placa mãe,
                    e assim demorei a ter um novo pc que suprisse minhas
                    necessidades diárias e ao mesmo tempo trabalhava para ajudar
                    em casa e conquistar o que almejava. Nesse tempo tive muito
                    apoio de familiares, namorada e de um amigo que tenho como
                    irmão, formado na aréa de TI.
                    <br />
                    Hoje já estou bem "aguçado" nas tecnologias voltadas para o
                    Front-End, a cada dia me aperfeiçoando e ampliando meus
                    conhecimentos e os tornando mais sólidos, em busca da tão
                    sonhada transição de carreira para a área de tecnologia como
                    desenvolvedor Front-End.
                  </p>
                  <div className="about-profile">
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
                        <span className="pro-detail">
                          david_ax7@hotmail.com
                        </span>
                      </li>
                      <li>
                        <span className="pro-title"> Telefone </span>{" "}
                        <span className="pro-detail">+55 (88) 9.9704-1704</span>
                      </li>
                    </ul>
                  </div>
                  <Link to={`/contato`} className="btn btn-common">
                    Entre em Contato
                    <i className="icon-speech">
                      <FaRegEnvelope />
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionSobreStyle>
  );
};

export default SectionSobre;
