import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  padding: 0 1rem 1rem 11%;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
  }
  .card {
    background: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.gray500};
    padding: 1.5rem;
    overflow: hidden;
    border: none;
    border-radius: 0.4rem;
  }
  .card-title-large {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
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
    font-size: 1rem;
    line-height: 1.5;
  }
  .card-cta {
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-left: auto;
  }
  .card:hover .card-cta {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .card:hover .card-title-large {
    transform: translateX(-115%);
    color: ${({ theme }) => theme.colors.white};
  }
  .card.scrum:hover,
  .card.scrum .card-title-small:hover {
    background-color: #7511f6;
    color: ${({ theme }) => theme.colors.white};
  }

  .card.javascript:hover,
  .card.javascript .card-title-small:hover {
    background-color: #ead41c;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.react:hover,
  .card.react .card-title-small:hover {
    background-color: #5ed3f3;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.github:hover,
  .card.github .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.gray900};
  }
  .card.typescript:hover,
  .card.typescript .card-title-small:hover {
    background-color: #0074c2;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.html:hover,
  .card.html .card-title-small:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
  .card.css:hover,
  .card.css .card-title-small:hover {
    background-color: #006eb4;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.bootstrap:hover,
  .card.bootstrap .card-title-small:hover {
    background-color: #7511f6;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.libs:hover,
  .card.libs .card-title-small:hover {
    background-color: #ead41c;
    color: ${({ theme }) => theme.colors.white};
  }
  .card.testes:hover,
  .card.testes .card-title-small:hover {
    background-color: #bb3913;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 50rem) {
    padding: 1rem;
  }
`;

export { Container };
