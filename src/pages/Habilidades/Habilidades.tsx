import { Container } from "./styles";

const Habilidades = () => {
  return (
    <Container>
      <div className="cards">
        <div className="card scrum">
          <h2 className="card-title-large">Scrum</h2>
          <h3 className="card-title-small">Gama Academy</h3>
          <p className="card-description">
            Com o Git posso ter o controle de versão distribuído e amplamente
            adotado usando a plataforma GitHub para gerenciar o código e criar
            um ambiente de colaboração entre nós devs.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card javascript">
          <h2 className="card-title-large">JavaScript</h2>
          <h3 className="card-title-small">Origamid - Udemy</h3>
          <p className="card-description">
            Do básico ao avançado tendo conhecimentos sólidos e compreensão
            total da linguagem, dos seus principais métodos e da sua sintaxe,
            manipulações do DOM e requisições assíncronas para API.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card react">
          <h2 className="card-title-large">React</h2>
          <h3 className="card-title-small">Origamid - Gama Academy</h3>
          <p className="card-description">
            Onde aprendi todos os "macetes" que a biblioteca proporciona de uma
            maneira simplificada para criação de interfaces Web, utilizando a
            sua renderização eficiente de componentes necessários à medida que
            os dados mudam.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card github">
          <h2 className="card-title-large">Git & GitHub</h2>
          <h3 className="card-title-small">Dio._ - Gama Academy</h3>
          <p>
            Com o Git posso ter o controle de versão distribuído e amplamente
            adotado usando a plataforma GitHub para gerenciar o código e criar
            um ambiente de colaboração entre nós devs.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card typescript">
          <h2 className="card-title-large">TypeScript</h2>
          <h3 className="card-title-small">Origamid - Gama Academy</h3>
          <p>
            Onde fiquei sabendo muito mais como o Javascript funciona, aprendi a
            manipular dados, criar interfaces, utilizar safe guards e definir o
            tipo correto de cada dado.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card html">
          <h2 className="card-title-large">Html:5</h2>
          <h3 className="card-title-small">Origamid - Gama Academy</h3>
          <p>
            Fundamental para criação de qualquer site, é o bloco de construção
            mais básico da web. Define o significado e a estrutura do conteúdo
            da web.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card css">
          <h2 className="card-title-large">Css</h2>
          <h3 className="card-title-small">Origamid - Gama Academy</h3>
          <p>
            Usado para descrever a aparência/apresentação e responsividade com
            Flexbox e Grid Layout absorvendo assim a forma mais semântica que o
            mercado exige.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card libs">
          <h2 className="card-title-large">Libs</h2>
          <h3 className="card-title-small">Gama Academy</h3>
          <p>
            As bibliotecas JavaScript facilitam muito a manutenção e organização
            do seu código, deixando tudo mais claro e limpo, e ganhando
            agilidade no desenvolvimento do trabalho.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
        <div className="card testes">
          <h2 className="card-title-large">Testes Aut.</h2>
          <h3 className="card-title-small">Gama Academy</h3>
          <p>
            Com a evolução da comunidade JavaScript, Frameworks e bibliotecas,
            existem diversos recursos para efetuar os devidos testes e manter a
            qualidade no projeto.
          </p>
          <a className="card-cta" href="#">
            &rarr;
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Habilidades;
