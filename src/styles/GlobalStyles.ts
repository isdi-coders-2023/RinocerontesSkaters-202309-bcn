import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, 
::before, 
::after {
box-sizing: border-box
}

html {
  font-family: ${({ theme }) => theme.typography.main} 
}

body {
  margin: 0;
  font-size: ${({ theme }) => theme.typography.input_size};
  
}

dl, dd {
  margin: 0; 
  padding: 0;
}

ul, li {
  list-style: none; 
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer; 
  font: inherit; 
  color: inherit; 
  background: ${({ theme }) => theme.colors.primary}
}

img {
  max-width: 100%; 
}
`;

export default GlobalStyle;
