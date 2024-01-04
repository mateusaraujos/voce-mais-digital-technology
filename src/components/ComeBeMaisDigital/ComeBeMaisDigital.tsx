import Form from "../Form/Form";

import "./ComeBeMaisDigital.css";

export default function ComeBeMaisDigital() {
  return (
    <section id="section-four">
      <div className="center-section">
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
      </div>
    </section>
  );
}
