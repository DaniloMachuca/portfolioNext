import { colors } from "@/app/styles";
import styled from "styled-components";

export const CourseCard = styled.div`
  width: 100%;
  padding-block: 16px;
  border: 3px solid ${colors.white};
  background-color: ${colors.darkerBackground};
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const TextContainer = styled.div`
  height: 100%;
  border-top: 3px solid ${colors.white};
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: ${colors.gray};
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  position: relative;
  img {
    height: 200px;
    max-width: 200px;
    object-fit: scale-down;
  }
`;

export const TextOverlay = styled.div`
  width: 100%;
  height: calc(100% + 16px);
  text-align: center;
  margin: auto 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all ease 0.3s;
  opacity: 0;
  display: flex;
  top: -16px;

  ${ImageContainer}:hover & {
    opacity: 1;
    transition: all ease 0.3s;
  }

  p {
    color: ${colors.white};
  }
`;
