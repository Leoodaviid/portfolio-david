import styled from "styled-components";

const ProjetosStyle = styled.section`
  #portfolios {
    background: transparent;
    margin-top: 2rem;
  }

  #portfolios .mix {
    padding: 10px;
  }

  .portfolio-item .shot-item {
    margin: 0px;
  }

  .portfolio-img {
    overflow: hidden;
    display: block;
    position: relative;
  }

  .portfolio-img img {
    width: 100%;
  }

  .shot-item {
    margin-right: 15px;
    border-radius: 0.2rem;
    background: #fff;
    position: relative;
  }

  .shot-item img {
    width: 100%;
    border-radius: 0.2rem;
  }

  .shot-item .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #19191970;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .shot-item:hover .overlay {
    opacity: 1;
  }

  .overlay {
    opacity: 0;
  }

  .overlay .icons i {
    height: 42px;
    width: 42px;
    line-height: 42px;
    color: #f50057;
    left: 50%;
    margin-left: -24px;
    margin-top: -24px;
    top: 50%;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    background: #19191990;
    border-radius: 4px;
  }

  .overlay .preview {
    position: absolute;
    left: 45%;
    top: 50%;
    color: #fff;
  }

  .overlay .link {
    position: absolute;
    left: 60%;
    margin-left: 10px;
    top: 50%;
    color: #fff;
  }

  .shot-item:hover .overlay {
    opacity: 1;
  }

  a:not([href]):not([tabindex]) {
    color: #fff;
  }

  a:not([href]):not([tabindex]):focus,
  a:not([href]):not([tabindex]):hover {
    color: #fff;
  }

  @media (min-width: 990px) {
  }
  #portfolios {
    padding-left: 10%;
  }
  /* #portfolio {
    padding: 0 0rem 0 0rem;
  } */
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
export { ProjetosStyle };
