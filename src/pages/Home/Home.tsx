import { Link } from "react-router-dom";
import { Section } from "./styles";
import TextMotion from "./TextMotion";

const Home = () => {
  const textOne = "Olá,".split("");
  const textTwo = "sou David,".split("");
  const textThree = "desenvolvedor web".split("");

  return (
    <Section>
      <div className="section-home">
        <div className="text-zone">
          <h1>
            {textOne.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
            <br />
            {textTwo.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
            <br />
            {textThree.map((letter, index) => (
              <TextMotion key={index}>{letter}</TextMotion>
            ))}
          </h1>
          <p className="gray-text">Front End Developer</p>
          <br />
          <div>
            <Link to={`/sobre`} className="btn btn-common">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
