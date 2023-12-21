import imgVideo from "../../assets/img/video.png";
import TextoMais from "../TextoMais";
import { TEXTO_MAIS_DIGITAL } from "../../data/EspecialData";
import "./SomosMais.css";

export default function SomosMais() {
  return (
    <section id="section-two">
      <h2>
        <span className="thin">Somos a</span> você+digital
      </h2>
      <div className="center-section">
        <div className="section-mais">
          <div className="video-tamanho">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="texto">
            {TEXTO_MAIS_DIGITAL.map((paragrafo) => (
              <TextoMais key={paragrafo.id} {...paragrafo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
