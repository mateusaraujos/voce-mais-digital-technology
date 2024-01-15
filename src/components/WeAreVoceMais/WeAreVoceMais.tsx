import TextVoceMaisDigital from "../TextVoceMaisDigital";
import { TextMaisDigital } from "../../types/appTypes";
import { TEXTS_MAIS_DIGITAL } from "../../constants/specialConstants";
import {
  ContainerQuemSomos,
  SectionTwo,
  SectionTwoTitle,
  Text,
  VideoSize,
} from "../../styles/weArePlus";
import { useTheme } from "../../hooks/useTheme";

import imgVideo from "../../assets/images/video.png";

export default function WeAreVoceMais() {
  const { theme } = useTheme();

  return (
    <SectionTwo theme={theme} id="section-two">
      <ContainerQuemSomos className="center-section">
        <SectionTwoTitle>
          <span className="thin">Somos a</span> você+digital
        </SectionTwoTitle>
        <div className="section-plus">
          <VideoSize className="video-size">
            <img className="video" src={imgVideo} alt="Vídeo" />
          </VideoSize>
          <Text className="text">
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
          </Text>
        </div>
      </ContainerQuemSomos>
    </SectionTwo>
  );
}
