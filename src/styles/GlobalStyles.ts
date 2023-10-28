'use client'

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  ::selection {
    text-shadow: none;
    color: #fff;
    background-color: #15989b;
  }

  html,
  menu {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after,
  html {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-open-sans), sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  button {
    color: inherit;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-josefin-sans), sans-serif;
  }

  a,
  button {
    touch-action: manipulation;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    pointer-events: none;
  }

  iframe,
  video {
    height: 100%;
    width: 100%
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-josefin-sans), sans-serif;
  }

  .swiper-wrapper {
    padding-bottom: 30px;
  }

  .swiper-pagination-bullet-active {
    background-color: #20C7CA;
  }

`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
