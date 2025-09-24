"use client";
import styled from "styled-components";
import { colors, mediaQuery } from "@/app/styles";

export const Header = styled.header`
  background-color: ${colors.primary};
  padding-block: 18px;

  > div {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ${mediaQuery.tablet} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      h1 {
        font-size: 24px;
        text-align: center;
      }
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;

  ${mediaQuery.tablet} {
    display: none;
  }

  li {
    a {
      padding: 16px;
      text-decoration: none;
      color: ${colors.darkerBackground};
      transition: all ease-in-out 0.3s;
      border-radius: 16px;

      &:hover {
        background-color: ${colors.lightPrimary};
        transition: all ease-in-out 0.3s;
        border-radius: 16px;
      }
    }
  }
`;

export const MobileBtn = styled.button`
  display: none;
  ${mediaQuery.tablet} {
    display: block;
    background-color: transparent;
    border: none;
    padding: 8px;
    text-align: end;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MobileMenu = styled.nav`
  display: none;
  ${mediaQuery.tablet} {
    display: flex;
    height: 0; /* Initially hidden */
    grid-column: span 2;
    overflow: hidden;
    transition: all ease-in-out 0.3s; /* Smooth transition */
    background-color: ${colors.lightPrimary};
    flex-direction: column;

    a {
      padding: 16px;
      color: ${colors.background};
      text-decoration: none;
    }

    &.active {
      transition: all ease-in-out 0.3s; /* Smooth transition */
      height: 150px;
    }
  }
`;
