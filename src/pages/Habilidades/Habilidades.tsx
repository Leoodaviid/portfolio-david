import { Container } from "./styles";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";

const Habilidades = () => {
  return (
    <>
      <Head
        title="Habilidades - Desenvolvedor Web Front-end"
        description="Descubra as habilidades de Leonardo David, um desenvolvedor web com experiência em front-end e UX design. Saiba mais sobre suas competências técnicas e sua abordagem para o desenvolvimento de projetos web."
      />
      <UseTitle />
      <Container>
        <div className="cards">
          <div className="card scrum">
            <h2 className="card-title-large">Scrum</h2>
            <h3 className="card-title-small">Scrum - Dio._</h3>
            <span className="card-title-station">Mai - 2022</span>
            <p className="card-description">
              Onde aprendi a diferenciar o modelo tradicional de trabalho e o
              dos times ágeis. Aprendi a importância do manifesto Ágil, Scrum e
              seus rituais, cerimônias, artefatos, como funciona na prática e
              refinar o backlog.
            </p>
            <a
              className="card-cta"
              href="https://www.dio.me/certificate/CB3B52EB/share"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card javascript">
            <h2 className="card-title-large">JavaScript</h2>
            <h3 className="card-title-small">JavaScript - Udemy</h3>
            <span className="card-title-station">Jul - 2022</span>
            <p className="card-description">
              Do básico ao avançado tendo conhecimentos sólidos e compreensão
              total da linguagem, dos seus principais métodos e da sua sintaxe,
              manipulações do DOM e requisições assíncronas para API.
            </p>
            <a
              className="card-cta"
              href="https://www.udemy.com/certificate/UC-89aa3a20-1b15-4554-88bc-3621f2b828dd/"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card react">
            <h2 className="card-title-large">React</h2>
            <h3 className="card-title-small">React - Origamid</h3>
            <span className="card-title-station">Fev - 2023</span>
            <p className="card-description">
              Onde aprendi todos os "macetes" que a biblioteca proporciona de
              uma maneira simplificada para criação de interfaces Web,
              utilizando a sua renderização eficiente de componentes necessários
              à medida que os dados mudam.
            </p>
            <a
              className="card-cta"
              href="https://www.origamid.com/certificate/af1a39eb"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card github">
            <h2 className="card-title-large">Git & GitHub</h2>
            <h3 className="card-title-small">Git & GitHub - Dio._</h3>
            <span className="card-title-station">Mai - 2022</span>
            <p className="card-description">
              Com o Git posso ter o controle de versão distribuído e amplamente
              adotado usando a plataforma GitHub para gerenciar o código e criar
              um ambiente de colaboração entre nós devs.
            </p>
            <a
              className="card-cta"
              href="https://www.dio.me/certificate/5D9A1F06/share"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card typescript">
            <h2 className="card-title-large">TypeScript</h2>
            <h3 className="card-title-small">TypeScript - Gama Academy</h3>
            <span className="card-title-station">Nov - 2022</span>
            <p className="card-description">
              Onde fiquei sabendo muito mais como o Javascript funciona, aprendi
              a manipular dados, criar interfaces, utilizar safe guards e
              definir o tipo correto de cada dado.
            </p>
            <a
              className="card-cta"
              href="https://gama-academy-main-certificate-service.s3.amazonaws.com/8d5642bc-d6ad-4936-89a0-102f53d1c42b.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card html">
            <h2 className="card-title-large">Html:5</h2>
            <h3 className="card-title-small">Html - Dio._</h3>
            <span className="card-title-station">Mai - 2022</span>
            <p className="card-description">
              Fundamental para criação de qualquer site, é o bloco de construção
              mais básico da web. Define o significado e a estrutura do conteúdo
              da web.
            </p>
            <a
              className="card-cta"
              href="https://www.dio.me/certificate/96C073FC/share"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card css">
            <h2 className="card-title-large">Css</h2>
            <h3 className="card-title-small">Css - Gama Academy</h3>
            <span className="card-title-station">Nov - 2022</span>
            <p className="card-description">
              Usado para descrever a aparência/apresentação e responsividade com
              Flexbox e Grid Layout absorvendo assim a forma mais semântica que
              o mercado exige.
            </p>
            <a
              className="card-cta"
              href="https://gama-academy-main-certificate-service.s3.amazonaws.com/9dd2f5dd-665b-4ddc-bd2c-545dc7f908e6.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card bootstrap">
            <h2 className="card-title-large">Booststrap</h2>
            <h3 className="card-title-small">Bootstrap - Origamid</h3>
            <span className="card-title-station">Jan - 2023</span>
            <p className="card-description">
              Onde aprendi a melhorar ainda mais minha produtividade no
              desenvolvimento Fron-end utilizando os principais components do
              Framework.
            </p>
            <a
              className="card-cta"
              href="https://www.origamid.com/certificate/8af258d6"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card redux">
            <h2 className="card-title-large">Redux</h2>
            <h3 className="card-title-small">Redux - Origamid</h3>
            <span className="card-title-station">Fev - 2023</span>
            <p className="card-description">
              Onde aprendi no geral que o redux fornece uma maneira escalável e
              suatentável de generenciar o estado de aplicativos complexos e é
              amplamente usado no ecossistema react.
            </p>
            <a
              className="card-cta"
              href="https://www.origamid.com/certificate/9b5c0959"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card libs">
            <h2 className="card-title-large">Libs</h2>
            <h3 className="card-title-small">Libs - Gama Academy</h3>
            <span className="card-title-station">Nov - 2022</span>
            <p className="card-description">
              As bibliotecas JavaScript facilitam muito a manutenção e
              organização do seu código, deixando tudo mais claro e limpo, e
              ganhando agilidade no desenvolvimento do trabalho.
            </p>
            <a
              className="card-cta"
              href="https://gama-academy-main-certificate-service.s3.amazonaws.com/c524eefe-62c1-4d12-9748-f710b57b70cd.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
          <div className="card testes">
            <h2 className="card-title-large">Testes Aut.</h2>
            <h3 className="card-title-small">Testes Aut. - Gama Academy</h3>
            <span className="card-title-station">Dez - 2022</span>
            <p className="card-description">
              Com a evolução da comunidade JavaScript, Frameworks e bibliotecas,
              existem diversos recursos para efetuar os devidos testes e manter
              a qualidade no projeto.
            </p>
            <a
              className="card-cta"
              href="https://gama-academy-main-certificate-service.s3.amazonaws.com/e5baaeaf-b2bd-499a-83cd-fe514d77125f.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              &rarr;
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Habilidades;
