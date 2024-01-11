import CourseExamples from "../CourseExamples";

import { CourseExample } from "../../types/appTypes";
import { COURSE_EXAMPLES } from "../../constants/specialConstants";
import { LinkCatalog, SectionOne } from "../../resources/themes/chooseCourse";
import { useTheme } from "../../hooks/useTheme";

import "./ChooseCourse.css";

export default function ChooseCourse() {
  const { theme } = useTheme();

  return (
    <SectionOne theme={theme} id="section-one">
      <div className="center-section">
        <h2>Escolha seu curso</h2>
        <div className="section-courses">
          <div className="course-examples">
            {COURSE_EXAMPLES.map((examples: CourseExample) => (
              <CourseExamples key={examples.alt} {...examples} />
            ))}
          </div>
        </div>
        <div className="to-courses">
          <LinkCatalog className="courses-link" to="/catalogo-de-cursos">
            Catálogo de Cursos
          </LinkCatalog>
        </div>
      </div>
    </SectionOne>
  );
}
