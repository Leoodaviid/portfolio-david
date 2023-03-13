import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
    padding-bottom: 8rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 1.5rem 1rem;
`;
