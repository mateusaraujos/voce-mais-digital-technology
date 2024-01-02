import SeloCompromisso from "../SeloCompromisso/SeloCompromisso";

import imgMapa from "../../assets/img/mapa.png";
import imgLocal from "../../assets/img/items/local.png";

import "./MapaLocal.css";

export default function MapaLocal() {
  return (
    <section className="section-three">
      <div className="center-section">
        <div className="section-mapa">
          <div className="mapa-tamanho">
            <img className="mapa" src={imgMapa} alt="Mapa" />
          </div>
          <div className="ajuste-perto">
            <h2>
              <span className="thin">Estamos</span> <br />
              perto de <br />
              você!
            </h2>
            <div className="endereco">
              <img className="ponto-local" src={imgLocal} alt="Ponto Local" />
              <p>
                Rua Domingos Correia, 76,
                <br /> Centro, Arapiraca/AL
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeloCompromisso />
    </section>
  );
}
