"use client";

import { colors } from "@/app/styles";
import styled from "styled-components";

export const background = styled.div`
  background-color: ${colors.darkerBackground};
`;

export const Experiences = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-block: 64px;
`;

export const ExperienceList = styled.ul`
  display: block;
  padding-top: 48px;
  padding-bottom: 64px;
`;
