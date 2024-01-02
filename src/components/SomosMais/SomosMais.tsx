import TextoMais from "../TextoMais";

import { TEXTS_MAIS_DIGITAL } from "../../constants/specialConstants";

import imgVideo from "../../assets/img/video.png";

import "./SomosMais.css";
import { TextMaisDigital } from "../../types/types";

export default function SomosMais() {
  const FIRST_TEXT = TEXTS_MAIS_DIGITAL.slice(0, 2);
  const SECOND_TEXT = TEXTS_MAIS_DIGITAL.slice(2);

  return (
    <section id="section-two">
      <div className="center-section">
        <h2>
          <span className="thin">Somos a</span> você+digital
        </h2>
        <div className="section-mais">
          <div className="texto">
            {FIRST_TEXT.map((paragraph: TextMaisDigital) => (
              <TextoMais key={paragraph.id} {...paragraph} />
            ))}
          </div>
          <div className="video-tamanho">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="texto texto-abaixo">
            {SECOND_TEXT.map((paragraph: TextMaisDigital) => (
              <TextoMais key={paragraph.id} {...paragraph} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
