import styled from "styled-components";

export const SidebarStyle = styled.aside`
  .aside {
    width: 10%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: visible;
    background-color: ${({ theme }) => theme.colors.gray900};
    z-index: 1;
  }
  .show-nav {
    height: 100%;
    overflow: visible;
  }
  .aside-wrapper {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray900};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .asideWrapperMobile {
    background-color: ${({ theme }) => theme.colors.gray900};
    height: 40vh;
  }
  .logo-section {
    min-height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray300};
  }
  .logoMobile {
    min-height: 11vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
  }
  .logo {
    display: grid;
    place-items: center;
    text-decoration: none;
  }

  .logo span {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.gray300};
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
    color: ${({ theme }) => theme.colors.gray300};
  }
  .nav-links a:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
  .nav-links a::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gray700};
  }
  .navMobile {
    display: block;
    position: absolute;
    height: 40vh;
    width: 50vw;
    padding: 0;
    background: ${({ theme }) => theme.colors.gray900};
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
    background-color: ${({ theme }) => theme.colors.gray900};
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
    color: ${({ theme }) => theme.colors.gray300};
  }
  .social-icons li a:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
export const ButtonNavStyle = styled.menu`
  .mobileButton {
    background: ${({ theme }) => theme.colors.gray900};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.9);
    color: ${({ theme }) => theme.colors.pink};
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
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.pink};
  }
  .mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor 0 -8px currentColor;
  }
`;
