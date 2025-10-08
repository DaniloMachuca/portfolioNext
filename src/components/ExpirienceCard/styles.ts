"use client";

import { colors, mediaQuery } from "@/app/styles";
import styled from "styled-components";

export const ExperienceCard = styled.div`
  border: 3px solid ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.background};
  text-align: left;
  margin-bottom: 48px;

  header {
    width: 100%;
    div {
      padding-inline: 64px;
      padding-block: 12px;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      border-bottom: 3px solid ${colors.primary};

      ${mediaQuery.tablet} {
        padding-inline: 32px;
      }
      ${mediaQuery.phone} {
        display: block;
      }
    }
  }
`;

export const Details = styled.div`
  padding: 16px;
  display: flex;
  padding-inline: 64px;
  color: ${colors.gray};
  justify-content: space-between;
  ${mediaQuery.tablet} {
    padding-inline: 32px;
  }
  ${mediaQuery.phone} {
    display: block;
  }

  p {
    font-size: 18px;
  }
`;

export const Description = styled.div`
  padding-inline: 64px;
  padding-block: 16px;
  ${mediaQuery.tablet} {
    padding-inline: 32px;
  }
  p {
    margin-top: 16px;
    font-size: 18px;
  }
`;
