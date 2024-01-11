import CommitmentSeal from "../CommitmentSeal/CommitmentSeal";
import { useTheme } from "../../hooks/useTheme";
import { PointImage, SectionThree } from "../../resources/themes/locationMap";

import imgMapa from "../../resources/assets/images/mapa.png";
import imgLocal from "/img/icons/local.png";

import "./LocationMap.css";

export default function LocationMap() {
  const { theme } = useTheme();

  return (
    <SectionThree theme={theme} className="section-three">
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
              <PointImage
                className="local-point"
                src={imgLocal}
                alt="Ponto Local"
              />
              <p>
                Rua Domingos Correia, 76,
                <br /> Centro, Arapiraca/AL
              </p>
            </div>
          </div>
        </div>
      </div>
      <CommitmentSeal />
    </SectionThree>
  );
}
