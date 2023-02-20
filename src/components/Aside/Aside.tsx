import { useEffect } from "react";
import { SidebarStyle, ButtonNavStyle } from "./style";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaTeamspeak,
  FaHubspot,
  FaRegAddressBook,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaProjectDiagram,
} from "react-icons/fa";
import useMedia from "../../Hooks/useMedia";
import { useState } from "react";

const Sidebar = () => {
  const mobile = useMedia("(max-width: 50rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <ButtonNavStyle>
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
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
