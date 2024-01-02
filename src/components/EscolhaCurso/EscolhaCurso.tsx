import { Link } from "react-router-dom";

import ExemplosCursos from "../ExemplosCursos";

import { CourseExample } from "../../types/types";
import { COURSE_EXAMPLES } from "../../constants/specialConstants";

import "./EscolhaCurso.css";

export default function EscolhaCurso() {
  return (
    <section id="section-one">
      <div className="center-section">
        <h2>Escolha seu curso</h2>
        <div className="section-cursos">
          <div className="cursos-exemplos">
            {COURSE_EXAMPLES.map((examples: CourseExample) => (
              <ExemplosCursos key={examples.alt} {...examples} />
            ))}
          </div>
        </div>
        <div className="para-cursos">
          <Link className="link-cursos" to="/catalogo-de-cursos">
            Catálogo de Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
