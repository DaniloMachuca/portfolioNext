import styled from "styled-components";
import { colors, mediaQuery } from "@/app/styles";

type Props = {
  $color: "normal" | "dark";
  $textDirection?: "right" | "left";
};

export const Section = styled.section<Omit<Props, "textDirection">>`
  padding: 64px 0;
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
  gap: 5%;
  padding-bottom: 5%;

  h4 {
    font-size: 28px;
    color: ${colors.gray};
    margin-bottom: 16px;
    ${mediaQuery.tablet} {
      font-size: 18px;
    }
    ${mediaQuery.laptop} {
      font-size: 20px;
    }
  }

  div {
    width: 100%;
  }

  img {
    border-radius: 24px;
    border: 5px solid ${colors.primary};
    object-fit: cover;
    max-width: 100%;
    width: 40%;
    height: 40%;
    background-color: ${colors.white};
    ${mediaQuery.phone} {
      margin-bottom: 24px;
    }
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
