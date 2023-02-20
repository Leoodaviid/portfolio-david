import { Link } from "react-router-dom";
import { Section } from "./styles";

const Home = () => {
  return (
    <Section>
      <div className="section-home">
        <div className="text-zone">
          <h1>
            Olá,
            <br />
            sou David,
            <br />
            desenvolvedor web
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
