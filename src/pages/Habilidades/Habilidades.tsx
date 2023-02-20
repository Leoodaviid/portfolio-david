import { Section } from "./styles";
import { FaGraduationCap } from "react-icons/fa";

const Habilidades = () => {
  return (
    <Section>
      <div id="resume">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="education">
                <ul className="timeline">
                  <li>
                    <i className="icon-graduation">
                      <FaGraduationCap />
                    </i>
                    <h2 className="timelin-title"></h2>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Scrum - Dio._</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Onde aprendi a diferenciar o modelo tradicional de
                        trabalho e o dos times ágeis. Aprendi a importância do
                        manifesto Ágil, Scrum e seus rituais, cerimônias,
                        artefatos, como funciona na prática e refinar o backlog.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Git / GitHub - Dio._</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Com o Git posso ter o controle de versão distribuído e
                        amplamente adotado usando a plataforma GitHub para
                        gerenciar o código e criar um ambiente de colaboração
                        entre nós devs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Html5 / Css - Origamid</h3>
                      <span>2022</span>
                      <p className="line-text">
                        São fundamentais para a criação de qualquer site. Onde
                        aprendi a estrutura básica ao avançado juntamente com a
                        definição de estilos para elementos com Css e
                        responsividade com Flexbox e Grid Layout absorvendo
                        assim a forma mais semântica que o mercado exige.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">JavaScript - Origamid</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Básico ao avançado tendo conhecimentos sólidos e
                        compreensão total da linguagem, dos seus principais
                        métodos e da sua sintaxe, manipulações do DOM e
                        requisições assíncronas para API.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Bootstraap - Dio._</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Onde aprendi a melhorar ainda mais minha produtividade
                        no desenvolvimento Fron-end utilizando os principais
                        components do Framework.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="experience">
                <ul className="timeline">
                  <li>
                    <i className="icon-briefcase">
                      <FaGraduationCap />
                    </i>
                    <h2 className="timelin-title"></h2>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">React - Origamid</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Onde aprendi todos os "macetes" que a biblioteca
                        proporciona de uma maneira simplificada para criação de
                        interfaces Web, utilizando a sua renderização eficiente
                        de componentes necessários à medida que os dados mudam.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">TypeScript - Origamid</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Onde fiquei sabendo muito mais como o Javascript
                        funciona, aprendi a manipular dados, criar interfaces,
                        utilizar safe guards e definir o tipo correto de cada
                        dado.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Libs - Gama</h3>
                      <span>2022</span>
                      <p className="line-text">
                        As bibliotecas JavaScript facilitam muito a manutenção e
                        organização do seu código, deixando tudo mais claro e
                        limpo, e ganhando agilidade no desenvolvimento do
                        trabalho.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Testes Aut. - Gama</h3>
                      <span>2022</span>
                      <p className="line-text">
                        Com a evolução da comunidade JavaScript, Frameworks e
                        bibliotecas, existem diversos recursos para efetuar os
                        devidos testes e manter a qualidade no projeto.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Habilidades;
