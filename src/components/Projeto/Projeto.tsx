import { FaEye, FaLink } from "react-icons/fa";
import { Container } from "./styles";
interface ProjetoProps {
  img: string;
  alt: string;
  preview: string;
  repository: string;
}
const Projeto = ({ img, alt, preview, repository }: ProjetoProps) => {
  return (
    <Container className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
      <div className="portfolio-item">
        <div className="shot-item">
          <img src={img} alt={alt} />
          <div className="overlay">
            <div className="icons">
              <a
                className="lightbox preview"
                href={preview}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon-eye">
                  <FaEye />
                </i>
              </a>
              <a
                className="link"
                href={repository}
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
    </Container>
  );
};

export default Projeto;
