"use client";

import styled from "styled-components";
import { colors, mediaQuery } from "@/app/styles";

type Props = {
  $color: "normal" | "dark";
  $textDirection?: "right" | "left";
};

export const Section = styled.section<Omit<Props, "textDirection">>`
  padding: 24px 0;
  background-color: ${({ $color }) =>
    $color === "normal" ? colors.background : colors.darkerBackground};
`;
export const Content = styled.div<Omit<Props, "$color">>`
  max-width: 80%;
  display: flex;
  flex-direction: ${({ $textDirection }) =>
    $textDirection === "left" ? "row-reverse" : "row"};
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 5%;

  h3 {
    font-size: 44px;
    text-shadow: none;
    margin-bottom: 8px;
    ${mediaQuery.tablet} {
      font-size: 24px;
    }
  }

  h4 {
    font-size: 28px;
    color: ${colors.gray};
    margin-bottom: 16px;
    ${mediaQuery.tablet} {
      font-size: 18px;
    }
  }

  div {
    width: 100%;

    p {
      font-size: 24px;
      ${mediaQuery.tablet} {
        font-size: 16px;
      }
    }
  }

  img {
    border-radius: 24px;
    border: 5px solid ${colors.primary};
    object-fit: cover;
    max-width: 100%;
    width: 50%;
    height: 50%;
    background-color: ${colors.white};
  }

  ${mediaQuery.phone} {
    flex-direction: ${({ $textDirection }) =>
      $textDirection === "left" ? "column-reverse" : "column"};
    max-width: 90%;
    img {
      max-width: 100%;
      width: 100%;
    }
    div {
      max-width: 100%;
      text-align: center;
    }
  }
`;
