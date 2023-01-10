import { Link } from "react-router-dom";
import { SectionHomeStyle } from "./style";
const SectionHome = () => {
  return (
    <SectionHomeStyle>
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
    </SectionHomeStyle>
  );
};

export default SectionHome;
