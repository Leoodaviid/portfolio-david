import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

const StyleGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Spectral:wght@700&display=swap');

::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.primary};
  overflow-x: hidden;
    -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  line-height: 25px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow-x: hidden;
}
h1, h2, h3, h4 {
  font-size: 38px;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
}
menu{
  margin: 0;
  padding: 0 1rem 0 ;
}
li{
  list-style-type: none;
}
.contact-form-area {
    background: transparent;
    box-shadow:none;
    border-radius: 0.2rem;
    padding: 2rem 3.5rem 0.5rem 3.5rem;
    
  }
  .btn-common {
    background-color: ${({ theme }) => theme.colors.pink};
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.colors.white}
  }
  .submit-button {
  }

  .btn-common:hover {
    background-color: ${darken(0.1, "#f50057")};
    color: ${({ theme }) => theme.colors.black};
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
  }
  @media (max-width:1160px) {
    .contact-form-area {
    padding: 2rem 1rem 0.5rem 2rem;
  }
  }

  @media (max-width: 800px){
    .contact-form-area {
    background: transparent;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    
  }
  }
`;

export { StyleGlobal };
