import { createGlobalStyle } from "styled-components";
import theme from "theme";

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #000000;
    color: #ffffff;
    scroll-behavior: smooth;
    scrollbar-color: rgba(69, 69, 69, 0.8) rgba(0, 0, 0, 0.3);
    scrollbar-width: thin;
    -moz-scrollbar-width: thin;
    -ms-scrollbar-width: thin;

    @media (max-width: 1024px) {
      background-color: ${theme.main};
    }
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: none;
    opacity: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: none;
    opacity: 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(69, 69, 69, 0.8);
    opacity: 0.3;
  }

  h1 {
    font-size: 4rem;
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 1023px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 1023px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 1023px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    line-height: 1.75;
    font-size: 0.9rem;
    color: #7d7d7d;
    text-align: justify;
  }

  hr {
    margin: 2.5rem 0;
    border-width: 2px;
    border-color: #7d7d7d;
    opacity: 0.3;
  }

`;
