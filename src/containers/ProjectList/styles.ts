import { mediaQuery } from "@/app/styles";
import styled from "styled-components";

export const Projects = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const ProjectList = styled.div`
  padding-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 24px;

  ${mediaQuery.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQuery.phone} {
    display: block;
  }
`;
