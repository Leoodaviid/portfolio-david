import styled from "styled-components";

const Section = styled.section`
  #portfolios {
    background: transparent;
    margin-top: 2rem;
  }

  #portfolios .mix {
    padding: 10px;
  }

  @media (min-width: 990px) {
  }
  #portfolios {
    padding-left: 10%;
  }

  @media (max-width: 800px) {
    #portfolios {
      padding-left: 0%;
    }
    #portfolio {
      margin: 0;
      padding: 0.5rem;
    }
  }
`;
export { Section };
