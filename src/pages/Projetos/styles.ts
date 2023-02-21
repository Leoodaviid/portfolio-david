import styled from "styled-components";

const Section = styled.section`
  padding: 0 1rem 1rem 11%;
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
  }

  @media (max-width: 50rem) {
    padding: 1rem;
  }
`;
export { Section };
