"use client";
import { createGlobalStyle, styled } from "styled-components";

export const colors = {
  primary: "#58c4dc",
  lightPrimary: "#85D6E7",
  lighterPrimary: "#B3E7F2",
  darkPrimary: "#3BA7BF",
  darkerPrimary: "#237A8C",
  background: "#23272f",
  darkerBackground: "#191b21",
  white: "#f3f4f6",
  gray: "#999999ff",
};

export const mediaQuery = {
  tablet: "@media (max-width: 1023px)",
  phone: "@media (max-width: 767px)",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
    body {
      background-color: ${colors.background};
      color: ${colors.white};
    }
    .container {
      max-width: 80%;
      margin: 0 auto;
    }
`;
