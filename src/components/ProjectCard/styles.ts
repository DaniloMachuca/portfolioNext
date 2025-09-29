import styled from "styled-components";
import { colors } from "@/app/styles";
import Link from "next/link";

export const Reset = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  padding: 16px;
  padding-bottom: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkerBackground};
  border-radius: 20px;
  padding: 16px;
  transition: all ease 0.3s;
  justify-content: space-between;
  overflow: hidden;
  height: 95%;

  &:hover {
    scale: 1.08;
    transition: all ease 0.3s;
    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  h4 {
    font-size: 24px;
    margin-block: 8px;
  }

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  margin-top: 16px;
  span {
    font-size: 14px;
    padding: 8px;
    margin: 4px;
    border: 1px solid ${colors.primary};
  }
`;
