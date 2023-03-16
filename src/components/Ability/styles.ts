import styled, { keyframes, css } from "styled-components";

const bounce = keyframes`
0%,100%{
  transform: translateX(-25%);
  animation-timing-function: cubic-bezier(0.8,0,1,1);
}
50%{
  transform: translateY(0);
  animation-timing-function: cubic-bezier(0,0,0.2,1);
}
`;

interface ContainerProps {
  name?: string;
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.black};
  font: 400 ${({ theme }) => theme.fontSize["2xl"]} / 1.5
    ${({ theme }) => theme.fontFamily.roboto};
  color: ${({ theme }) => theme.colors.gray400};
  padding: 1.5rem;
  overflow: hidden;
  border: none;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font: 600 ${({ theme }) => theme.fontSize["4xl"]} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray700};
    transform: translateX(7rem);
    transition: transform 2.5s;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
    color: ${({ theme }) => theme.colors.gray500};
  }

  span {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray500};
  }
  p {
    font: 400 ${({ theme }) => theme.fontSize.md} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.gray500};
  }
  a {
    display: inline-block;
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.white};
    width: 3rem;
    height: 3rem;
    border-radius: 0.4rem;
    display: grid;
    place-items: center;
    margin-left: auto;
  }
  :hover h2 {
    transform: translateX(-115%);
    color: ${({ theme }) => theme.colors.white};
  }

  :hover a {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray900};
    animation: ${bounce} 1s infinite;
  }

  ${({ name }) =>
    name === "Scrum"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.purple};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "JavaScript"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.yellow};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "React"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.cyan};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Git & GitHub"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.gray300};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.gray900};
            }
          }
        `
      : name === "TypeScript"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.indigo};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Html:5"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.orange};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Css"
      ? css`
          :hover {
            background-color: #563d7c;
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Sass"
      ? css`
          :hover {
            background-color: #cf649a;
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Bootstrap"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.purple};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Redux"
      ? css`
          :hover {
            background-color: #7248b6;
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Libs"
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.yellow};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : name === "Testes Aut."
      ? css`
          :hover {
            background-color: ${({ theme }) => theme.colors.brown};
            h3,
            p,
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }
        `
      : css`
          color: black;
        `}
`;
