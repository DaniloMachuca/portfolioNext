"use client";

import { colors } from "@/app/styles";
import styled from "styled-components";
import Link from "next/link";

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 16px;

  &::before {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
  }
`;

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.background};
  max-width: 400px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    margin-bottom: 32px;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`;

export const Btn = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  border: 3px solid ${colors.primary};
  transition: border ease-in-out 0.3s;
  text-align: center;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all ease-in-out 0.3s;
  margin-right: 16px;

  &:hover {
    transition: all ease-in-out 0.3s;
    background-color: ${colors.primary};
    color: ${colors.background};
  }
`;
