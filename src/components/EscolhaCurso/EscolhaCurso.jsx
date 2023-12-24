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
          <a className="link-cursos" href="#">
            Quero ser +digital
          </a>
        </div>
      </div>
    </section>
  );
}
