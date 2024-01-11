import TextVoceMaisDigital from "../TextVoceMaisDigital";

import { TextMaisDigital } from "../../types/appTypes";
import { TEXTS_MAIS_DIGITAL } from "../../constants/specialConstants";
import { ContainerQuemSomos, SectionTwo } from "../../resources/themes/weArePlus";
import { useTheme } from "../../hooks/useTheme";

import imgVideo from "../../resources/assets/images/video.png";

import "./WeAreVoceMais.css";

export default function WeAreVoceMais() {
  const { theme } = useTheme();

  return (
    <SectionTwo theme={theme} id="section-two">
      <ContainerQuemSomos className="center-section">
        <h2>
          <span className="thin">Somos a</span> você+digital
        </h2>
        <div className="section-plus">
          <div className="video-size">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </div>
          <div className="text">
            {TEXTS_MAIS_DIGITAL.map((paragraph: TextMaisDigital, index) => (
              <TextVoceMaisDigital
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
      </ContainerQuemSomos>
    </SectionTwo>
  );
}
