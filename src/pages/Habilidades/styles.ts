import styled, { keyframes } from "styled-components";

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

const Container = styled.div`
  max-width: 100%;
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
  }

  .card {
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
  }
  .card-title-large {
    font: 600 ${({ theme }) => theme.fontSize["4xl"]} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray700};
    transform: translateX(7rem);
    transition: transform 2.5s;
  }
  .card-title-small {
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
  }
  .card-title-station {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
  .card-description {
    font: 400 ${({ theme }) => theme.fontSize.md} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.gray500};
  }
  .card-cta {
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

  .card:hover .card-cta {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray900};
    animation: ${bounce} 1s infinite;
  }
  .card:hover .card-title-large {
    transform: translateX(-115%);
    color: ${({ theme }) => theme.colors.white};
  }
  .card.scrum:hover,
  .card.scrum .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }

  .card.javascript:hover,
  .card.javascript .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.react:hover,
  .card.react .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.cyan};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.github:hover,
  .card.github .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.gray900};
  }
  .card.typescript:hover,
  .card.typescript .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.indigo};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.html:hover,
  .card.html .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.css:hover,
  .card.css .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.indigo};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.bootstrap:hover,
  .card.bootstrap .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.redux:hover,
  .card.redux .card-title-small:hover {
    background-color: #7248b6;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.libs:hover,
  .card.libs .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.testes:hover,
  .card.testes .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export { Container };
