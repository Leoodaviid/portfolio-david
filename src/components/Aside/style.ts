import styled from "styled-components";

export const SidebarStyle = styled.aside`
  .aside {
    width: 10%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: visible;
    background-color: #191919;
    z-index: 1;
  }
  .show-nav {
    height: 100%;
    overflow: visible;
  }
  .aside-wrapper {
    height: 100vh;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .asideWrapperMobile {
    background-color: #191919;
    height: 40vh;
  }
  .logo-section {
    min-height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000;
    color: #e1e1e1;
  }
  .logoMobile {
    min-height: 11vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 0.2rem;
    background-color: #000;
  }
  .logo {
    display: grid;
    place-items: center;
    text-decoration: none;
  }
  .logo img {
    width: 50px;
    height: auto;
  }
  .logo span {
    font-size: 1.7rem;
    color: #e1e1e1;
  }
  .logo-section > span {
    margin-top: 25px;
    font-size: 12px;
    font-size: "Times New Roman", Times, serif;
  }

  .nav-links a {
    display: block;
    text-align: center;
    line-height: 3rem;
    text-decoration: none;
    color: #e1e1e1;
  }
  .nav-links a:hover {
    color: #f50057;
  }
  .nav-links a::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    background-color: #2d2d2e;
  }
  .navMobile {
    display: block;
    position: absolute;
    height: 40vh;
    width: 50vw;
    padding: 0;
    background: #191919;
    box-shadow: 0 0px 30px rgba(0, 0, 0, 1.9);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  .navMobileActive {
    transition: 0.3s;
    height: 17rem;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
  }

  .social-icons {
    background-color: #191919;
    width: 100%;
    height: 2rem;
    margin: 0;
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-icons li {
    width: 30px;
    font-size: 1rem;
  }
  .social-icons li a {
    text-decoration: none;
    color: #e1e1e1;
  }
  .social-icons li a:hover {
    color: #f50057;
  }
`;
export const ButtonNavStyle = styled.menu`
  .mobileButton {
    background: #191919;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.9);
    color: #f50057;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    margin-bottom: 0.5rem;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }
  .mobileButton::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  .mobileButton:focus,
  .mobileButton:hover,
  .mobileButtonActive {
    outline: none;
    background: #191919;
    color: #f50057;
  }
  .mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor 0 -8px currentColor;
  }
`;
