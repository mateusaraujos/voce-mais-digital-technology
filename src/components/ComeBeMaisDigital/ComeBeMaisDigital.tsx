import Form from "../Form/Form";
import { useTheme } from "../../hooks/useTheme";
import {
  ComeBeDiv,
  SectionComeBe,
  SectionFour,
  SectionFourTitle,
} from "../../styles/comeBeMaisDigital";

export default function ComeBeMaisDigital() {
  const { theme } = useTheme();

  return (
    <SectionFour theme={theme} id="section-four">
      <ComeBeDiv className="center-section">
        <SectionFourTitle>
          <span className="thin">Venha ser</span> +digital
        </SectionFourTitle>
        <SectionComeBe className="section-comebe">
          <div className="left-side">
            <p className="fill-blank-fields">
              Preencha os campos do formulário para que nossa equipe entre em
              contato com você e forneça mais detalhes em breve.
            </p>
            <p className="your-future">
              Seu futuro digital
              <br /> começa aqui!
            </p>
          </div>
          <div className="form-card">
            <Form />
          </div>
        </SectionComeBe>
      </ComeBeDiv>
    </SectionFour>
  );
}
