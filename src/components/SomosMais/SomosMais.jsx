import imgVideo from "../../assets/img/video.png";
import TextoMais from "../TextoMais";
import { TEXTO_MAIS_DIGITAL } from "../../data/EspecialData";
import "./SomosMais.css";

export default function SomosMais() {
  const TEXTO_PRIMEIRA_PARTE = TEXTO_MAIS_DIGITAL.slice(0, 2);
  const TEXTO_SEGUNDA_PARTE = TEXTO_MAIS_DIGITAL.slice(2);

  return (
    <section id="section-two">
      <div className="center-section">
        <h2>
          <span className="thin">Somos a</span> você+digital
        </h2>
        <div className="section-mais">
          <div className="texto">
            {TEXTO_PRIMEIRA_PARTE.map((paragrafo) => (
              <TextoMais key={paragrafo.id} {...paragrafo} />
            ))}
          </div>
          <div className="video-tamanho">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="texto texto-abaixo">
            {TEXTO_SEGUNDA_PARTE.map((paragrafo) => (
              <TextoMais key={paragrafo.id} {...paragrafo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
