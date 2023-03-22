import styled from "styled-components";

const Section = styled.section`
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
  }
`;
export { Section };
