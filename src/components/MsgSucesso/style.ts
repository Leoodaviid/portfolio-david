import styled from "styled-components";

const MsgStyled = styled.div`
  .text-zone {
    font-size: 5rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative;
  }
  .text-zone::before {
    content: "<h2>";
    position: absolute;
    top: -80px;
    left: -10px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: #666565;
    letter-spacing: 3px;
  }
  .text-zone::after {
    content: "</h2>";
    position: absolute;
    bottom: -10px;
    right: -70px;
    font-size: 1.2rem;
    font-family: "La Belle Aurore", cursive;
    color: #666565;
    letter-spacing: 3px;
  }
  .section-text {
    height: 85vh;
    display: flex;
    align-items: center;
    padding-left: 20%;
  }
  @media (min-width: 1200px) {
    .section-text {
      justify-content: center;
      padding-left: 0%;
    }
  }
  @media (max-width: 800px) {
    .text-zone {
      font-size: 3rem;
      line-height: 40px;
    }
    .section-text {
      padding-left: 5%;
      height: 65vh;
    }
  }
  @media (max-width: 400px) {
    .text-zone::after {
      right: 0px;
    }
  }
`;

export { MsgStyled };
