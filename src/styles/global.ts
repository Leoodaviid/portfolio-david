import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.gray800};
  -webkit-font-smoothing: antialiased;
  color: ${({ theme }) => theme.colors.white};
}
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: ${({ theme }) => theme.colors.gray900};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.colors.pink};
  border-radius: 10px;
}
body,
input,
select,
textarea,
button{
  font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
}

h1{
  font: 600 ${({ theme }) => theme.fontSize["5xl"]} / 1.125
    ${({ theme }) => theme.fontFamily.heading};
    margin: 0;
}
p{
  font: 400 ${({ theme }) => theme.fontSize["2xl"]} / 1.5
      ${({ theme }) => theme.fontFamily.roboto};
    color: ${({ theme }) => theme.colors.gray500};
    margin: 0;
}
a{
  color: inherit;
  text-decoration: none;
}

button{
  cursor: pointer;
}

ul,
li{
  list-style: none;
}


@media (max-width: 1200px) {
   h1{
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
   } 
   p{
    font-size: ${({ theme }) => theme.fontSize.lg};
   }
  }
  @media (max-width: 800px) {
    h1{
      font-size: ${({ theme }) => theme.fontSize["3xl"]};
    }

  }
`;

export { StyleGlobal };
