import styled from "styled-components";

export const Section = styled.section`
  margin-top: 2rem;
  height: calc(100% - 120px);
  display: flex;
  align-items: center;

  .text-zone span {
    display: inline-block;
  }
  .text-zone h1 {
    display: inline-block;
    font-size: 5rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative;
    font-size: 6.3rem;
    line-height: 85px;
    letter-spacing: -6px;
  }
  .text-zone h1::before {
    content: "<h1>";
    position: absolute;
    top: -65px;
    left: -10px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: ${({ theme }) => theme.colors.gray600};
    letter-spacing: 3px;
  }
  .text-zone h1::after {
    content: "</h1>";
    position: absolute;
    bottom: -10px;
    right: -75px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: ${({ theme }) => theme.colors.gray600};
    letter-spacing: 3px;
  }
  .text-zone img {
    width: 35px;
    height: 50px;
  }
  .text-zone .gray-text {
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.gray500};
    letter-spacing: 3px;
    font-size: ${({ theme }) => theme.fontSize.md};
    position: relative;
  }
  #section-home {
    padding-left: 11.5rem;
  }

  .text-zone img {
    width: 50px;
    height: 72px;
  }
  .text-zone .gray-text {
    font: 400 ${({ theme }) => theme.fontSize.lg} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.gray500};
  }

  @media (max-width: 1160px) {
    .text-zone h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 890px) {
    .text-zone h1 {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 800px) {
    align-items: center;
  }
  @media (max-width: 620px) {
    .text-zone h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 500px) {
    .text-zone h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 400px) {
    align-items: center;
    .text-zone h1 {
      letter-spacing: -2px;
      font-size: 2rem;
      line-height: 30px;
    }
  }
  @media (max-width: 350px) {
    align-items: center;
    .text-zone h1 {
      letter-spacing: -2px;
      font-size: 1.6rem;
      line-height: 30px;
    }
  }
`;
