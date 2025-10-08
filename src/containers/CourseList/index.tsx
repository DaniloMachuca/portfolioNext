import { Courses } from "@/data/data";
import CourseCard from "@/components/CourseCard";
import * as S from "./styles";
import { SectionTitle, Text } from "@/app/styles";
import Aos from "aos";

const CourseList = () => {
  return (
    <S.Background>
      <S.Courses data-aos="fade-up">
        <SectionTitle>Cursos com certificação</SectionTitle>
        <Text>Aqui está a lista de cursos que realizei com certificação:</Text>
        <S.CourseList>
          {Courses.map((c) => (
            <CourseCard course={c} key={c.id} />
          ))}
        </S.CourseList>
      </S.Courses>
    </S.Background>
  );
};

export default CourseList;
