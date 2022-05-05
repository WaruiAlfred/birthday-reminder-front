import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 2rem;
  }
`;

export default GlobalStyles;
