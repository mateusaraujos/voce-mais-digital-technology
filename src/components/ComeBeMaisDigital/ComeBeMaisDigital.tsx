import Form from "../Form/Form";
import { useTheme } from "../../hooks/useTheme";
import { ComeBeDivision, SectionFour } from "../../styles/comeBeMaisDigital";

import "./ComeBeMaisDigital.css";

export default function ComeBeMaisDigital() {
  const { theme } = useTheme();

  return (
    <SectionFour theme={theme} id="section-four">
      <ComeBeDivision className="center-section">
        <h2>
          <span className="thin">Venha ser</span> +digital
        </h2>
        <div className="section-comebe">
          <div className="left-side">
            <h3>
              Preencha os campos do formulário
              <br /> para que nossa equipe entre em
              <br />
              contato com você e forneça
              <br /> mais detalhes em breve.
            </h3>
            <h4>
              Seu futuro digital
              <br /> começa aqui!
            </h4>
          </div>
          <div className="form-card">
            <Form />
          </div>
        </div>
      </ComeBeDivision>
    </SectionFour>
  );
}
