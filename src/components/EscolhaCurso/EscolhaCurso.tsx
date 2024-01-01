import { Link } from "react-router-dom";
import ExemplosCursos from "../ExemplosCursos";
import { EXEMPLOS_CURSOS } from "../../data/EspecialData";
import "./EscolhaCurso.css";

export default function EscolhaCurso() {
  return (
    <section id="section-one">
      <div className="center-section">
        <h2>Escolha seu curso</h2>
        <div className="section-cursos">
          <div className="cursos-exemplos">
            {EXEMPLOS_CURSOS.map((exemplos) => (
              <ExemplosCursos key={exemplos.alt} {...exemplos} />
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
