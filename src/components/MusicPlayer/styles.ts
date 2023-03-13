import styled from "styled-components";

export const HeaderStyle = styled.div`
  .music {
    display: flex;
    justify-content: end;
    z-index: 2;
  }
  #sound {
    padding: 0.3rem 1rem;
    background-color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
  }
  .soundCloud {
    font-size: 1.2rem;
    margin: 0.4rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  .soundCloudActive {
    font-size: 1.2rem;
    margin: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  .on-off {
    cursor: pointer;
    margin-left: 5px;
  }
  .off {
    color: ${({ theme }) => theme.colors.pink};
  }
  .on {
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 720px) {
    .music {
      padding: 0.8rem 0;
    }
  }
`;
