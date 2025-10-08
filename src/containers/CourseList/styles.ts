import { colors, mediaQuery } from "@/app/styles";
import styled from "styled-components";

export const Background = styled.div`
  background-color: ${colors.background};
  padding-top: 64px;
`;
export const Courses = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 120px;
`;

export const CourseList = styled.div`
  padding-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5%;

  ${mediaQuery.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQuery.phone} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5%;
  }
`;
