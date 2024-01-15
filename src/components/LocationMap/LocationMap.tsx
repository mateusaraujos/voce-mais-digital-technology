import CommitmentSeal from "../CommitmentSeal/CommitmentSeal";
import { useTheme } from "../../hooks/useTheme";
import {
  PointImage,
  SectionMap,
  SectionThree,
  SectionThreeTitle,
} from "../../styles/locationMap";

import imgMapa from "../../assets/images/mapa.png";
import imgLocal from "/img/icons/local.png";

export default function LocationMap() {
  const { theme } = useTheme();

  return (
    <SectionThree theme={theme} className="section-three">
      <div className="center-section">
        <SectionMap className="section-map">
          <div className="map-size">
            <img className="map" src={imgMapa} alt="Mapa" />
          </div>
          <div className="adjust-close">
            <SectionThreeTitle>
              <span className="thin">Estamos</span> <br />
              perto de <br />
              você!
            </SectionThreeTitle>
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
        </SectionMap>
      </div>
      <CommitmentSeal />
    </SectionThree>
  );
}
