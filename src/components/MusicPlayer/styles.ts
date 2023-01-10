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
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
  }
  .soundCloud {
    font-size: 1.2rem;
    margin: 0.4rem;
    color: #f50057;
  }

  .soundCloudActive {
    font-size: 1.2rem;
    margin: 0.4rem;
    color: #08fdd8;
  }
  .on-off {
    cursor: pointer;
    margin-left: 5px;
  }
  .off {
    color: #f50057;
  }
  .on {
    color: #08fdd8;
  }
  .btns-container .fas {
    font-size: 2rem;
    padding: 10px;
    background-color: #181818;
    color: #fff;
    cursor: pointer;
  }
  .btns-container .fas:nth-child(2) {
    display: none;
  }
`;
