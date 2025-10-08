"use client";

import { colors } from "@/app/styles";
import styled from "styled-components";

export const RepoCard = styled.div`
  padding-inline: 8px;
  a {
    p {
      padding: 16px;
      border: 3px solid ${colors.primary};
      transition: all ease-in-out 0.3s;
    }
    text-decoration: none;
    color: ${colors.primary};

    &:hover {
      transition: all ease-in-out 0.3s;
      color: ${colors.darkerBackground};
      p {
        background-color: ${colors.primary};
      }
    }
  }
`;
