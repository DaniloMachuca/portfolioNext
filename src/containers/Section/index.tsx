import { type JSX } from "react";
import Image from "next/image";

import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  img: string;
  color?: "normal" | "dark";
  textDirection?: "right" | "left";
  view?: "100vh";
};

const Section = ({
  img,
  children,
  color = "normal",
  textDirection,
  view,
}: Props) => {
  function directionCheck() {
    if (textDirection === "left") {
      return "fade-left";
    } else {
      return "fade-right";
    }
  }

  return (
    <S.Section $view={view} $color={color}>
      <S.Content $textDirection={textDirection} data-aos={directionCheck()}>
        <Image src={img} alt={img} width={900} height={900} />
        {children}
      </S.Content>
    </S.Section>
  );
};

export default Section;
