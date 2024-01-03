import TextoMais from "../TextoMais";

import { TextMaisDigital } from "../../types/types";
import { TEXTS_MAIS_DIGITAL } from "../../constants/specialConstants";

import imgVideo from "../../assets/img/video.png";

import "./SomosMais.css";

export default function SomosMais() {
  return (
    <section id="section-two">
      <div className="center-section">
        <h2>
          <span className="thin">Somos a</span> você+digital
        </h2>
        <div className="section-plus">
          <div className="video-size">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="text">
            {TEXTS_MAIS_DIGITAL.map((paragraph: TextMaisDigital, index) => (
              <TextoMais
                key={paragraph.id}
                {...paragraph}
                className={`text-element ${
                  index === 0
                    ? "div-1"
                    : index === 1
                    ? "div-2"
                    : index === 2
                    ? "div-3"
                    : index === 3
                    ? "div-4"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
