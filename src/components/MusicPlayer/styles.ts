import styled from "styled-components";

export const HeaderStyle = styled.div`
  .music {
    display: flex;
    justify-content: end;
    z-index: 2;
    padding: 0.8rem;
  }
  #sound {
    padding: 0.3rem 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 1.9);
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray300};
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
`;
