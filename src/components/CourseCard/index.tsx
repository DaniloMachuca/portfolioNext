import { Course } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

import { Text } from "@/app/styles";
import * as S from "./styles";

type Props = {
  course: Course;
};

const CourseCard = ({ course }: Props) => {
  return (
    <S.CourseCard>
      <Link href={course.certificate} target="_blank">
        <S.ImageContainer>
          <S.TextOverlay>
            <Text>Certificado</Text>
          </S.TextOverlay>
          <Image
            src={course.image}
            alt={course.title}
            width={900}
            height={900}
          />
        </S.ImageContainer>
      </Link>
      <S.TextContainer>
        <Text>{course.title}</Text>
        <span>{course.place}</span>
      </S.TextContainer>
    </S.CourseCard>
  );
};

export default CourseCard;
