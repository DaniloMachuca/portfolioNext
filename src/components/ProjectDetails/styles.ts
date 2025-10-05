"use client";

import { colors } from "@/app/styles";
import styled from "styled-components";

export const Details = styled.div`
  padding-block: 64px;
  background-color: ${colors.background};
`;

export const SkillSection = styled.div`
  padding-block: 64px;
  background-color: ${colors.darkerBackground};

  ul {
    padding-block: 16px;
    li {
      list-style: disc;
      margin-left: 16px;
    }
  }
`;
