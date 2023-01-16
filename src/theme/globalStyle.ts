import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: Manrope-Regular;
    font-style: regular;
    font-weight: 500;
    src: url(../assets/fonts/Manrope-Regular.ttf) format("ttf");
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    max-width: 1920px;
    overflow-x: hidden;
  }
  html {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
