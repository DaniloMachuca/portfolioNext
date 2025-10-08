"use client";

import { colors, mediaQuery } from "@/app/styles";
import styled from "styled-components";

export const RepoListSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-block: 64px;
`;

export const background = styled.div`
  background-color: ${colors.darkerBackground};
`;

export const RepoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 48px;
  padding-bottom: 64px;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.phone} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
