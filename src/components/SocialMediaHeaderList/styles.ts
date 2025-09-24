import styled from "styled-components";
import { mediaQuery } from "@/app/styles";

export const List = styled.ul`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  ${mediaQuery.phone} {
    justify-content: space-between;
    margin-bottom: 24px;
  }

  li {
    a {
      font-size: 18px;
      div {
        padding: 12px;
        border-radius: 50%;
        text-align: center;
        width: 32px;
        height: 32px;
        transition: transform ease-in-out 0.2s;
        font-size: 32px;
        margin: 0 auto;
        &:hover {
          transition: transform ease-in-out 0.2s;
          transform: scale(1.2);
        }
        svg {
          width: 100%;
        }
      }
    }
  }

  .github {
    background-color: #181717;
  }

  .linkedin {
    background-color: #0077b5;
  }
  .whatsapp {
    background-color: #3eba54;
  }
  .google {
    background-color: #d14836;
  }
`;
