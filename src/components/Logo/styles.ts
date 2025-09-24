"use client";
import Link from "next/link";

import styled from "styled-components";
import { colors, mediaQuery } from "@/app/styles";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.background};
  border: 3px solid transparent;
  transition: border ease-in-out 0.3s;
  text-align: center;

  &:hover {
    transition: border ease-in-out 0.3s;
    border: 3px solid #000;
  }

  ${mediaQuery.tablet} {
    font-size: 10px;
    white-space: nowrap;
  }
`;
