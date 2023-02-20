import styled from "styled-components";
import { darken } from "polished";

const Container = styled.div`
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
    background: transparent;
    position: relative;
    transition: all;
  }

  .shot-item img {
    object-fit: cover;
    width: 100%;
    height: 16rem;
    border-radius: 0.2rem;
  }

  .shot-item .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${darken(0.1, "#19191970")};
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .overlay .icons i {
    height: 42px;
    width: 42px;
    line-height: 42px;
    color: ${({ theme }) => theme.colors.pink};
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
    color: ${({ theme }) => theme.colors.gray300};
  }

  .overlay .link {
    position: absolute;
    left: 60%;
    margin-left: 10px;
    top: 50%;
  }

  .shot-item:hover .overlay {
    opacity: 1;
  }
`;

export { Container };
