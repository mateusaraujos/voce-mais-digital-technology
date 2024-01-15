import CourseExamples from "../CourseExamples";
import { CourseExample } from "../../types/appTypes";
import { COURSE_EXAMPLES } from "../../constants/specialConstants";
import {
  LinkCatalog,
  SectionCourses,
  SectionOne,
  SectionOneTitle,
  ToCoursesDiv,
} from "../../styles/chooseCourse";
import { useTheme } from "../../hooks/useTheme";

export default function ChooseCourse() {
  const { theme } = useTheme();

  return (
    <SectionOne theme={theme} id="section-one">
      <div className="center-section">
        <SectionOneTitle>Escolha seu curso</SectionOneTitle>
        <SectionCourses className="section-courses">
          <div className="course-examples">
            {COURSE_EXAMPLES.map((examples: CourseExample) => (
              <CourseExamples key={examples.alt} {...examples} />
            ))}
          </div>
        </SectionCourses>
        <ToCoursesDiv className="to-courses">
          <LinkCatalog className="courses-link" to="/catalogo-de-cursos">
            Catálogo de Cursos
          </LinkCatalog>
        </ToCoursesDiv>
      </div>
    </SectionOne>
  );
}
