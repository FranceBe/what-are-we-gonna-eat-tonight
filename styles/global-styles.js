import { createGlobalStyle } from 'styled-components'
import { colors, spaces } from 'styles/variables'

// PlayfairDisplay
import PlayfairDisplaytRegular from 'assets/fonts/PlayfairDisplay-Regular.ttf'
import PlayfairDisplayBold from 'assets/fonts/PlayfairDisplay-Bold.ttf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'PlayfairDisplay';
    src: url(${PlayfairDisplaytRegular}) format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'PlayfairDisplay';
    src: url(${PlayfairDisplayBold}) format('ttf');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  body {
    background-color: ${colors.primary_light};
    margin: ${spaces.small};
    color: ${colors.primary_dark};
    font-family: 'PlayfairDisplay', sans-serif;
  }
  `
