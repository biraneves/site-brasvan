import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#fff',
  black: '#000',
  darkTitle: '#6ec1e4',
  defaulText: '#7a7a7a',
};

export const fonts = {
  fontTitle: 'Montserrat, sans-serif',
  fontBody: 'Roboto, sans-serif',
};

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.defaulText};
    font-family: 'Roboto', sans-serif;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`;
