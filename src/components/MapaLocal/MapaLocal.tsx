import SeloCompromisso from "../SeloCompromisso/SeloCompromisso";

import imgMapa from "../../assets/img/mapa.png";
import imgLocal from "../../assets/img/items/local.png";

import "./MapaLocal.css";

export default function MapaLocal() {
  return (
    <section className="section-three">
      <div className="center-section">
        <div className="section-map">
          <div className="map-size">
            <img className="map" src={imgMapa} alt="Mapa" />
          </div>
          <div className="adjust-close">
            <h2>
              <span className="thin">Estamos</span> <br />
              perto de <br />
              você!
            </h2>
            <div className="superscription">
              <img className="local-point" src={imgLocal} alt="Ponto Local" />
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
