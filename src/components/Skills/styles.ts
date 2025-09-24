import styled from "styled-components";
import { colors } from "@/app/styles";

type SkillProps = {
  color: string;
};

export const Skills = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-block: 64px;
`;

export const SkillList = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
  max-width: 80%;
  margin: 24px auto;
  border: solid 3px ${colors.darkerPrimary};
  border-radius: 10px;
  padding: 16px;
`;

export const Skill = styled.li<SkillProps>`
  padding: 16px;
  border: solid 3px ${(props) => props.color};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 100px;
  height: 88px;
  color: ${(props) => props.color};
  transition: all ease-in-out 0.3s;
  div {
    height: 42px;
    font-size: 40px;
    margin-bottom: 12px;
  }

  svg {
    width: 100%;
  }

  span {
    font-size: 12px;
  }

  &:hover {
    background-color: ${(props) => props.color};
    transition: all ease-in-out 0.3s;
    color: ${colors.white};
  }
`;

export const optionList = styled.ul`
  display: inline-flex;
  text-align: center;
  margin: 0 auto;
  gap: 16px;
  padding-top: 32px;
`;

export const tabBtn = styled.button`
  border: none;
  background-color: ${colors.primary};
  color: ${colors.background};
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  margin: 0 auto;
  border-radius: 10px;
  border: 3px solid transparent;

  &:hover {
    background-color: ${colors.darkerPrimary};
    transition: all ease-in-out 0.3s;
  }

  &.active {
    background-color: ${colors.darkerPrimary};
    border: 3px solid ${colors.lightPrimary};
    color: ${colors.lightPrimary};
  }
`;
