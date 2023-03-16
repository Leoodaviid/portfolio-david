import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

export { Container };
