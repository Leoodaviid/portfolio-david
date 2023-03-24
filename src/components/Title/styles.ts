import styled from "styled-components";

export const Title = styled.h1`
  font: 600 ${({ theme }) => theme.fontSize["5xl"]} / 1.125
    ${({ theme }) => theme.fontFamily.heading};
  margin: 0;
  span {
    color: ${({ theme }) => theme.colors.pink};
  }

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
  }
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
  }
`;

export const Container = styled.div`
  padding: 3.75rem 0 3.75rem 0;
  color: ${({ theme }) => theme.colors.white};
  > p {
    font: 400 ${({ theme }) => theme.fontSize["2xl"]} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 0.25rem;
  }
  p::before {
    content: "";
    display: inline-block;
    height: 0.3rem;
    width: 0.75rem;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    background-color: ${({ theme }) => theme.colors.pink};
    transition: width 0.2s;
  }

  @media (max-width: 800px) {
    padding: 2.5rem 0 2.5rem 0;
    > p {
      font-size: 1rem;
    }
    p::before {
      display: none;
    }
  }
`;
