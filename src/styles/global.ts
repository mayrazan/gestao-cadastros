import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 700px) {
      font-size: 87.5%;
    }
  }
  body {
    min-height: 100vh;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  body, button, input, textarea {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button, a {
    cursor: pointer;
  }
`;
