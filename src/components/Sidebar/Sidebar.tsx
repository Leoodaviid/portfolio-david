import { Container } from "./style";
import { NavLink } from "react-router-dom";
import {
  FaTeamspeak,
  FaHubspot,
  FaHome,
  FaRegAddressBook,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaProjectDiagram,
} from "react-icons/fa";
import menuImg from "../../assets/icons/menu.svg";
import { useState } from "react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Container isMenuOpen={menuOpen}>
        <button type="button" onClick={handleToggleMenu}>
          <img src={menuImg} alt="Abrir e fechar o menu" />
        </button>
        <nav>
          <ul>
            <li className="logo">
              <NavLink to="/">
                <span>David</span>
                <span>Front-End</span>
                <FaHome />
              </NavLink>
            </li>
            <li>
              <NavLink to="sobre">
                <FaTeamspeak />
                <span>Sobre</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="habilidades">
                <FaHubspot />
                <span>Habilidades</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="projetos">
                <FaProjectDiagram />
                <span>Projetos</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="contato">
                <FaRegAddressBook />
                <span>Contato</span>
              </NavLink>
            </li>
          </ul>
          <div className="social-media">
            <a
              className="linkedin"
              href="https://linkedin.com/in/leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin">
                <FaLinkedinIn />
              </i>
            </a>

            <a
              className="github"
              href="https://github.com/Leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="github">
                <FaGithub />
              </i>
            </a>

            <a
              className="facebook"
              href="https://www.facebook.com/Leoodaviid"
              target="_blank"
              rel="noreferrer"
            >
              <i className="facebook">
                <FaFacebookF />
              </i>
            </a>
          </div>
        </nav>
      </Container>
      {/* <ButtonNavStyle>
        {mobile && (
          <button
            className={`mobileButton ${mobileMenu && "mobileButtonActive"}`}
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
      </ButtonNavStyle>
      <SidebarStyle>
        <div
          className={`${mobile ? "navMobile" : "aside"} ${
            mobileMenu && "navMobileActive"
          }`}
        >
          <div className={`${mobile ? "asideWrapperMobile" : "aside-wrapper"}`}>
            <div className={`${mobile ? "logoMobile" : "logo-section "}`}>
              <NavLink to={"/"} className="logo">
                <span>David</span>
              </NavLink>
              <span>Front-End</span>
            </div>
            <nav className="nav-links">
              <NavLink className="nav-link px-2 " to="/sobre">
                <FaTeamspeak />
                <span className="ms-1 d-none d-sm-inline nav-iten">Sobre</span>
              </NavLink>
              <NavLink className="nav-link px-2" to="/habilidades">
                <FaHubspot />
                <span className="ms-1 d-none d-sm-inline nav-iten">
                  Habilidades
                </span>
              </NavLink>
              <NavLink className="nav-link px-2" to="/projetos">
                <FaProjectDiagram />
                <span className="ms-1 d-none d-sm-inline nav-iten">
                  Projetos
                </span>
              </NavLink>
              <NavLink className="nav-link px-2" to="/contato">
                <FaRegAddressBook />
                <span className="ms-1 d-none d-sm-inline nav-iten">
                  Contato
                </span>
              </NavLink>
              <a />
            </nav>
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  href="https://linkedin.com/in/leoodaviid"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/Leoodaviid"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="github">
                    <FaGithub />
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/Leoodaviid"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="facebook">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SidebarStyle> */}
    </>
  );
};

export default Sidebar;
