import { Container } from "./styles";
import { Ability } from "../../components/Ability/Ability";
import { UseTitle } from "../../components/Title/useTitle";
import { Head } from "../../components/Head/Head";

const Skills = () => {
  return (
    <>
      <Head
        title="Habilidades - Desenvolvedor Web Front-end"
        description="Descubra as habilidades de Leonardo David, um desenvolvedor web com experiência em front-end e UX design. Saiba mais sobre suas competências técnicas e sua abordagem para o desenvolvimento de projetos web."
      />
      <UseTitle />
      <Container>
        <Ability
          name="Scrum"
          station="Dio._"
          emission="Mai - 2022"
          description="Onde aprendi a diferenciar o modelo tradicional de trabalho e o dos
        times ágeis. Aprendi a importância do manifesto Ágil, Scrum e seus
        rituais, cerimônias, artefatos, como funciona na prática e refinar o
        backlog."
          link="https://www.dio.me/certificate/CB3B52EB/share"
        />
        <Ability
          name="JavaScript"
          station="Udemy"
          emission="Jul - 2022"
          description="Do básico ao avançado tendo conhecimentos sólidos e compreensão
          total da linguagem, dos seus principais métodos e da sua sintaxe,
          manipulações do DOM e requisições assíncronas para API."
          link="https://www.udemy.com/certificate/UC-89aa3a20-1b15-4554-88bc-3621f2b828dd/"
        />
        <Ability
          name="React"
          station="Origamid"
          emission="Fev - 2023"
          description="Onde aprendi todos os macetes que a biblioteca proporciona de uma
          maneira simplificada para criação de interfaces Web, utilizando a
          sua renderização eficiente de componentes necessários à medida que
          os dados mudam."
          link="https://www.origamid.com/certificate/af1a39eb"
        />
        <Ability
          name="Git & GitHub"
          station="Dio._"
          emission="Mai - 2022"
          description="Com o Git posso ter o controle de versão distribuído e amplamente
          adotado usando a plataforma GitHub para gerenciar o código e criar
          um ambiente de colaboração entre nós devs."
          link="https://www.dio.me/certificate/5D9A1F06/share"
        />
        <Ability
          name="TypeScript"
          station="Gama Academy"
          emission="Nov - 2022"
          description="Onde fiquei sabendo muito mais como o Javascript funciona, aprendi a
          manipular dados, criar interfaces, utilizar safe guards e definir o
          tipo correto de cada dado."
          link="https://drive.google.com/file/d/1RnIS-exHiXSB6VBAn0xxTbY6GXe4p-kc/view"
        />
        <Ability
          name="Html:5"
          station="Dio._"
          emission="Mai - 2022"
          description="Fundamental para criação de qualquer site, é o bloco de construção
          mais básico da web. Define o significado e a estrutura do conteúdo
          da web."
          link="https://www.dio.me/certificate/96C073FC/share"
        />
        <Ability
          name="Css"
          station="Gama Academy"
          emission="Nov - 2022"
          description="Usado para descrever a aparência/apresentação e responsividade com
          Flexbox e Grid Layout absorvendo assim a forma mais semântica que o
          mercado exige."
          link="https://drive.google.com/file/d/1RnIS-exHiXSB6VBAn0xxTbY6GXe4p-kc/view"
        />
        <Ability
          name="Bootstrap"
          station="Origamid"
          emission="Jan - 2023"
          description="Onde aprendi a melhorar ainda mais minha produtividade no
          desenvolvimento Fron-end utilizando os principais components do
          Framework."
          link="https://www.origamid.com/certificate/8af258d6"
        />
        <Ability
          name="Sass"
          station="Gama Academy"
          emission="Jan - 2023"
          description="Onde aprendi a escrever Css mais limpo, 
          reutilizável e escalável,facilitando a manutenção e a evolução
          do código ao longo do tempo"
          link="https://drive.google.com/file/d/1RnIS-exHiXSB6VBAn0xxTbY6GXe4p-kc/view"
        />
        <Ability
          name="Redux"
          station="Origamid"
          emission="Fev - 2023"
          description="Onde aprendi no geral que o redux fornece uma maneira escalável e
          suatentável de generenciar o estado de aplicativos complexos e é
          amplamente usado no ecossistema react."
          link="https://www.origamid.com/certificate/9b5c0959"
        />
        <Ability
          name="Libs"
          station="Gama Academy"
          emission="Nov - 2022"
          description="As bibliotecas JavaScript facilitam muito a manutenção e organização
          do seu código, deixando tudo mais claro e limpo, e ganhando
          agilidade no desenvolvimento do trabalho."
          link="https://drive.google.com/file/d/1RnIS-exHiXSB6VBAn0xxTbY6GXe4p-kc/view"
        />
        <Ability
          name="Testes Aut."
          station="Gama Academy"
          emission="Dez - 2022"
          description="Com a evolução da comunidade JavaScript, Frameworks e bibliotecas,
          existem diversos recursos para efetuar os devidos testes e manter a
          qualidade no projeto."
          link="https://drive.google.com/file/d/1RnIS-exHiXSB6VBAn0xxTbY6GXe4p-kc/view"
        />
      </Container>
    </>
  );
};

export default Skills;
