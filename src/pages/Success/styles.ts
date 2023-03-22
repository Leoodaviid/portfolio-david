import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;

  p {
    font-size: 5rem;
    line-height: 45px;
    letter-spacing: -3px;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
  }
  p::before {
    content: "<h2>";
    position: absolute;
    top: -80px;
    left: -10px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: ${({ theme }) => theme.colors.gray600};
    letter-spacing: 3px;
  }
  p::after {
    content: "</h2>";
    position: absolute;
    bottom: -10px;
    right: -70px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: ${({ theme }) => theme.colors.gray600};
    letter-spacing: 3px;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 950px) {
    p {
      font-size: 4rem;
    }
  }
  @media (max-width: 800px) {
    height: 65vh;
    p {
      font-size: 3rem;
      line-height: 40px;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 400px) {
    p::after {
      right: 0;
    }
  }
`;
