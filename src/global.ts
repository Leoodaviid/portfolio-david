import { createGlobalStyle } from "styled-components";

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
  color: #e1e1e1;
  background: rgb(29, 29, 29);
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
  /* .contact-form-area:hover{
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
    
  } */
  .btn-common {
    background-color: #f50057;
    position: relative;
    z-index: 1;
    color: #e1e1e1;
  }
  .submit-button {
  }

  .btn-common:hover {
    background-color: #ff6088;
    color: #000;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
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
