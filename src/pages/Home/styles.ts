import styled from "styled-components";

export const Section = styled.section`
  .section-home {
    height: 90vh;
    display: flex;
    align-items: center;
    padding-left: 16rem;
  }
  .text-zone span {
    display: inline-block;
  }
  .text-zone h1 {
    display: inline-block;
    font-size: 5rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative;
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
  .text-zone h1 {
    font-size: 6.3rem;
    line-height: 85px;
    letter-spacing: -6px;
  }
  .text-zone img {
    width: 50px;
    height: 72px;
  }
  .text-zone .gray-text {
    font-size: 1rem;
  }
  @media (max-width: 1160px) {
    .section-home {
      padding-left: 7rem;
    }
    .text-zone h1 {
      font-size: 4.5rem;
    }
  }
  @media screen and (max-width: 800px) {
    .section-home {
      padding-left: 1rem;
      height: 65vh;
      width: 80vw;
    }
    .text-zone h1 {
      font-size: 3rem;
      line-height: 40px;
    }
  }
`;
