import styled, { css } from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean;
}
export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.black};
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          width: 14.3rem;
        `
      : css`
          width: 6.7rem;
        `}
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      padding: 0;
      margin: 0;
    }
    .logo a {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: transparent;
      align-self: center;
      position: absolute;
      top: 80px;
      transition: 0.3s;
      ${({ isMenuOpen }) =>
        isMenuOpen
          ? css`
              left: 45px;
            `
          : css`
              left: -15px;
            `}

      &:hover {
        color: ${({ theme }) => theme.colors.pink};
      }
      svg {
        display: none;
      }
    }
    .logo a > span {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
    .logo .active::after {
      display: none;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        display: flex;
        align-items: center;
        gap: 2rem;

        &:hover {
          color: ${({ theme }) => theme.colors.pink};
        }

        svg {
          fill: ${({ theme }) => theme.colors.white};
          width: 3rem;
          height: 3rem;
          transition: fill 0.3s;
        }

        span {
          font-size: ${({ theme }) => theme.fontSize.lg};
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);
            background-color: ${({ theme }) => theme.colors.pink};
            width: 5px;
            height: calc(100% + 10px);
            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${({ theme }) => theme.colors.pink};
          }

          span {
            color: ${({ theme }) => theme.colors.pink};
          }
        }
      }
    }
  }
  .social-media {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    gap: 1rem;
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }
      .logo a {
        position: relative;
        height: auto;
        top: 0;
        left: 0;
        svg {
          display: flex;
        }
      }
      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            width: 2.5rem;
            height: 2.5rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
  .social-media {
    display: none;
  }
`;
