import { Link } from "react-router-dom";

import CourseExamples from "../CourseExamples";

import { CourseExample } from "../../types/appTypes";
import { COURSE_EXAMPLES } from "../../constants/specialConstants";

import "./ChooseCourse.css";

export default function ChooseCourse() {
  return (
    <section id="section-one">
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
          <Link className="courses-link" to="/catalogo-de-cursos">
            Catálogo de Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
